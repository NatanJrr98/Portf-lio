let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let linksMenu = document.querySelectorAll('.menu-mobile nav ul li a');

btnMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
})

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        overlay.classList.remove('abrir-menu');
    });
});