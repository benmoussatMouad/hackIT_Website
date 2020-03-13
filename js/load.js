window.onload=()=>{
    let body = document.getElementsByTagName('body')[0]
    body.style.overflowY='scroll'
    body.firstElementChild.firstElementChild.remove()
    body.firstElementChild.remove()
    let hero = document.getElementById('hero');
    let heroBg = hero.getElementsByClassName('hero-bg')[0];
    heroBg.classList.add("animation-chake")
}