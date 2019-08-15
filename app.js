const form = document.querySelector('#form');

class Pokemon{
    constructor(name){
        this.name = name
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    addPokemon()
})

const addPokemon = () =>{
    let value = document.querySelector('#pokemon').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then( data =>{
            data.json()
            .then(transformData =>{
                console.log(transformData)
            })
        })
        .catch(err =>{
            console.log(err)
        })
    
    form.reset();
}