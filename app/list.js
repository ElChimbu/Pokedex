//Const
const pokemonList = document.querySelector('.pokemonList');
const label = document.querySelector('#label');

const getPokemon = () =>{
    const get = JSON.parse(localStorage.getItem('Pokemon'));
    
    pokemonList.innerHTML = ""

    get.map((name, i) =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
           .then( data => {
               data.json()
   
               .then(transformData =>{
   
                   const name = transformData.name;
                   const img = transformData.sprites.front_default;
                   
                   const twice = { name, img, i };
                   
                   printPokemonList(twice)    
               })
           })
       })
}

const printPokemonList = (twice) =>{
    label.innerHTML = "You looked for:"
    pokemonList.innerHTML += `
    <li class="eachOther">
        <p>${twice.name}</p>
        <button class="deletePoke" onclick="deletePoke(${twice.i})">
            <i class="fas fa-trash-alt"></i>
        </button>
        <img src="${twice.img}" alt="poke">
    </li>
    `
}

const deletePoke = (i) =>{
    let get = JSON.parse(localStorage.getItem('Pokemon'));
    get.splice(i, 1);
    localStorage.setItem('Pokemon', JSON.stringify(get))

    getPokemon()
}


window.addEventListener('DOMContentLoaded', getPokemon())
