const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight') 
const inputHeight = document.querySelector('#height')

const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),
    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

form.onsubmit = function (e) {
    e.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value 

    const showAlertError = notNumber(weight) || notNumber(height)

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}

function notNumber(value) {
    return isNaN(value) || value == ""
}

function IMC(weight, height) {
    return (weight / ((height / 100) **2)).toFixed(2)
}