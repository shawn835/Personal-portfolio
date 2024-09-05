const humbergur = document.getElementById('closed')

const paragraph = document.querySelectorAll('div')
console.log(paragraph)
humbergur.addEventListener('click', () => {
    humbergur.classList.toggle('open')
})