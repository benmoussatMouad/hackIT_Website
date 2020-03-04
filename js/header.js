var header = document.querySelector("header");
var headerBg = header.getElementsByClassName("header-bg")[0];
var hero = document.getElementsByClassName("hero")[0];
headerBg.style.opacity = 0 ;

window.addEventListener("scroll", () => {
    height = 2 * hero.offsetHeight / 3;

    headerBg.style.opacity = window.scrollY / height ;

});
