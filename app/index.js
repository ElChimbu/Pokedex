import {firstScreen, addPokemon, handleToggle} from './app.js'
const form = document.querySelector('#form');
const left_btn = document.querySelector('.clickeablePad-left');
const right_btn = document.querySelector('.clickeablePad-right');
const capture_btn = document.querySelector('.btn');

firstScreen.innerHTML = `
    <p class="error">
        write a pokemon down below
    </p>
`

//DOM events

capture_btn.addEventListener('click', () =>{
    location.reload();
})

left_btn.addEventListener('click', () =>{
    handleToggle()
})

right_btn.addEventListener('click', () =>{
    handleToggle()
})

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    addPokemon()
})


