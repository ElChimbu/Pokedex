import {firstScreen, addPokemon} from './app.js'

const form = document.querySelector('#form');

 firstScreen.innerHTML = `
    <p class="error">
        write a pokemon down bellow
    </p>
`

//DOM events

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    addPokemon()
})
