const imgs = document.querySelectorAll('.speakers-img')

imgs.forEach(element => {
    element.addEventListener("click", e => {
        let src = element.firstElementChild.src
        element.firstElementChild.src=document.querySelector('.speakers-img--xl').firstElementChild.src 
        document.querySelector('.speakers-img--xl').firstElementChild.src= src
        let bio = document.querySelector('.speakers-bio').children[1]
        bio.innerHTML=src.split('/').slice(-1)[0].split('.')[0]
    })
})