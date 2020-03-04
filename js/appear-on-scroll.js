const aboutItems = document.querySelectorAll(".about-item")

function isOnViewport(element) {
    let bounding = element.getBoundingClientRect()
    return bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
}

window.addEventListener('scroll', (e) => {
    aboutItems.forEach(element => {
        if (isOnViewport(element)) {
            element.classList.add('is-appearing')
        }
    })
})

window.addEventListener('load', (e) => {
    aboutItems.forEach(element => {
        if(isOnViewport(element)){
            element.classList.add('is-appearing')
        }
    })
})