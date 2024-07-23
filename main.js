let menuBurger = document.querySelector(".menu-burger");
let iconModal = document.querySelector(".icon-modal");
let botoes = document.querySelectorAll(".modal nav ul li a");
let botaoDown = document.querySelector(".modal .btn-down");

botoes.forEach(botao => {
    botao.addEventListener("click", menuShow);
});

menuBurger.addEventListener("click", menuShow);
iconModal.addEventListener("click", menuShow);
botaoDown.addEventListener("click", menuShow);

function menuShow() {
    let menuMobile = document.querySelector('.modal');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.body.style.overflow = "auto";
    } else {
        menuMobile.classList.add('open');
        document.body.style.overflow = "hidden";
    }
}
