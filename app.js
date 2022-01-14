let korish  = document.querySelector('#korish')
let overlay = document.querySelector('.overlay')
let modal = document.querySelector('.modal')
let button = document.querySelector('#button')
let mainButton = document.querySelector(".main-button")
let mainButtonOchirish = document.querySelector("#mainbutton")

mainButton.addEventListener('click', function() {
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')
})  

mainButtonOchirish.addEventListener('click', function() {
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
})


