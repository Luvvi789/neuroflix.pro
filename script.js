let Sections = document.querySelectorAll('section');

let connect = document.getElementById('connected');
let blur1 = document.getElementById('blur-1');
let blur2 = document.getElementById('blur-2');
let blur3 = document.getElementById('blur');
let conexao = document.getElementById('conexion');
let conexao2 = document.getElementById('conexion-1');
let conexao3 = document.getElementById('conexion-2');

// Si falta alguno de los elementos de la animación, se desactiva sin romper el resto de la página.
const animacionLista = [connect, blur1, blur2, blur3, conexao, conexao2, conexao3].every(Boolean);

// Año del footer
const anioFooter = document.getElementById('footer-year');
if (anioFooter) {
    anioFooter.textContent = new Date().getFullYear();
}

window.onload = () => {
    if (!animacionLista) return;
    conexao2.classList.remove('connected-card-backlink-circles');
    conexao3.classList.remove('connected-card-backlink-lines');
    conexao.classList.remove('connected-card-backlink-animation');
    conexao.classList.remove('connected-card-backlink-animation-visible');
    conexao.hidden = true;
    blur3.classList.remove('connected-card-record-animation');
    blur3.classList.remove('connected-card-record-animation-visible');
    blur1.classList.remove('connected-card-record-circle');
    blur1.classList.remove('connected-card-record-circle-blur');
    blur2.classList.remove('connected-card-record-circle');

}

window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 400;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    })
}


if (animacionLista) {
connect.onmouseover = function (event) {
    if (this != event.currentTarget) { return false; }
    conexao.hidden = false;
    conexao2.classList.add('connected-card-backlink-circles');
    conexao3.classList.add('connected-card-backlink-lines');
    conexao.classList.add('connected-card-backlink-animation');
    conexao.classList.add('connected-card-backlink-animation-visible');
    blur3.classList.add('connected-card-record-animation');
    blur3.classList.add('connected-card-record-animation-visible');
    blur1.classList.add('connected-card-record-circle');
    blur1.classList.add('connected-card-record-circle-blur');
    blur2.classList.add('connected-card-record-circle');
}


function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'animated' class to start the animation
            conexao.hidden = false;
            conexao2.classList.add('connected-card-backlink-circles');
            conexao3.classList.add('connected-card-backlink-lines');
            conexao.classList.add('connected-card-backlink-animation');
            conexao.classList.add('connected-card-backlink-animation-visible');
            blur3.classList.add('connected-card-record-animation');
            blur3.classList.add('connected-card-record-animation-visible');
            blur1.classList.add('connected-card-record-circle');
            blur1.classList.add('connected-card-record-circle-blur');
            blur2.classList.add('connected-card-record-circle');

            // Stop observing once animation is triggered
            observer.unobserve(entry.target);
        }
    });
}

const targetElement = document.getElementById('view');
if (targetElement) {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    observer.observe(targetElement);
}

connect.onmouseout = function (event) {
    if (this != event.currentTarget) { return false; }
    conexao2.classList.remove('connected-card-backlink-circles');
    conexao3.classList.remove('connected-card-backlink-lines');
    conexao.classList.remove('connected-card-backlink-animation');
    conexao.classList.remove('connected-card-backlink-animation-visible');
    conexao.hidden = true;
    blur3.classList.remove('connected-card-record-animation');
    blur3.classList.remove('connected-card-record-animation-visible');
    blur1.classList.remove('connected-card-record-circle');
    blur1.classList.remove('connected-card-record-circle-blur');
    blur2.classList.remove('connected-card-record-circle');
}
} // fin de if (animacionLista)
