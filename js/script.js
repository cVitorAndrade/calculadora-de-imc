import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notNumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight') 
const inputHeight = document.querySelector('#height')

form.onsubmit = function (e) {
    e.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value 

    const weightOrHeightNotIsANumber = notNumber(weight) || notNumber(height)

    if(weightOrHeightNotIsANumber) {
        AlertError.open()
        return
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

inputWeight.addEventListener('input', () => {
    AlertError.close()
})

inputHeight.addEventListener('input', () => {
    AlertError.close()
})

function displayResultMessage (result) {
    Modal.message.innerText =  `Seu IMC é de ${result}`
    Modal.open()
}