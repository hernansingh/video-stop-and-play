// Se trae el contenedor del boton
const btn = document.querySelector(".switch-btn");
//  se trae el contenedor del video
const video = document.querySelector(".video-container");

// al contenedor del video se le pone un addEventListener al click
btn.addEventListener('click', function() {
    // si NO contiene "slide" agregalo y pausa el video
    // si SI lo contiene entonces saca la clase esa y reproduci el video
    if (!btn.classList.contains('slide')) {
        btn.classList.add("slide");
        video.pause();
    } else {
        btn.classList.remove("slide");
        video.play();
    };
});

//preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
    preloader.classList.add("hide-preloader");
});