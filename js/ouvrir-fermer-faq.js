const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(element =>
    {
        element.onclick = (e) => {
            if (element.classList.contains('is-open')) {
                element.classList.replace('is-open','is-closed')
            } else element.classList.replace('is-closed','is-open')
        }
    })
