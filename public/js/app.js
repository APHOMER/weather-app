const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')

messageOne.textContent = 'From javascript'
messageTwo.textContent = 'From Html'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    console.log(location)
})

messageOne.textContent = 'Loading...'
messageTwo.textContent = ''


