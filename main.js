const input = document.querySelector('#input')
const result = document.querySelector('#result')


// input Event Listener
input.addEventListener('input',()=>{
    result.textContent = input.value
})