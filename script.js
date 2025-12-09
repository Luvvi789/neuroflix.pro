let Sections = document.querySelectorAll('section');

let connect = document.getElementById('connected');
let blur1 = document.getElementById('blur-1');
let blur2 = document.getElementById('blur-2');
let blur3 = document.getElementById('blur');
let conexao = document.getElementById('conexao');
let conexao2 = document.getElementById('conexao-1');
let conexao3 = document.getElementById('conexao-2');

window.onload = () => {
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

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
const targetElement = document.getElementById('view');
observer.observe(targetElement);




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
