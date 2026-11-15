// Proxy de clips para studio.neuroflix.pro
// n8n entrega los archivos siempre con estado 200. Aquí se convierte a 206/416 usando Content-Range,
// para que el navegador pida el video por partes y empiece a reproducir sin bajarlo entero.
// Los archivos no se modifican: los bytes son exactamente los guardados.
export const config = { runtime: 'edge' };

const ORIGEN = 'https://n8n-n8n.r4ojxc.easypanel.host/webhook/videos-9f3a71c2';
const PASAR = ['content-type', 'content-length', 'content-range', 'accept-ranges', 'cache-control', 'access-control-allow-origin', 'access-control-expose-headers'];

function pedir(search, range) {
  const h = { 'x-nf-rango': '1' };
  if (range) h.range = range;
  return fetch(ORIGEN + search, { headers: h });
}

export default async function handler(req) {
  const u = new URL(req.url);
  const range = req.headers.get('range');
  let r = await pedir(u.search, range);
  if (r.headers.get('x-nf-error')) {
    // Algo no cuadró al recortar: se entrega el archivo completo como antes
    const p = new URLSearchParams(u.search);
    p.set('full', '1');
    r = await pedir('?' + p.toString(), null);
  }
  const headers = new Headers();
  for (const k of PASAR) {
    const v = r.headers.get(k);
    if (v) headers.set(k, v);
  }
  const cr = r.headers.get('content-range') || '';
  let status = r.status;
  if (status === 200 && cr) status = cr.startsWith('bytes */') ? 416 : 206;
  const cuerpo = req.method === 'HEAD' || status === 416 ? null : r.body;
  return new Response(cuerpo, { status, headers });
}
