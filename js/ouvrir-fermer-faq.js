let faqQuestions = document.getElementsByClassName("faq-question")
for (let index = 0; index < faqQuestions.length; index++) {
    const element = faqQuestions[index];
    element.onclick = () => {
        if (element.className.split(' ').includes('is-open')) {
            element.className = element.className.replace('is-open', 'is-closed')
        } else element.className = element.className.replace('is-closed', 'is-open')
    }
}