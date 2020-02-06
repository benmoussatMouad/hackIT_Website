const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(element =>
    {
        element.onclick = (e) => {
            if (element.className.split(' ').includes('is-open')) {
                element.className = element.className.replace('is-open', 'is-closed')
            } else element.className = element.className.replace('is-closed', 'is-open')
        }
    })
