//Const
export const deepScreen = document.querySelector('.deepScreen');
const deletePoke = document.querySelector('#deletePoke');
const pokemonList = document.querySelector('.pokemonList');
const label = document.querySelector('#label');

Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

export const pokeLocalStorage = (pokemonArray) =>{
    console.log(pokemonArray)
    let newPokemonArray = pokemonArray.unique()

    localStorage.setItem('Pokemon', JSON.stringify(newPokemonArray));

    getPokemon()
}

const getPokemon = () =>{
    const get = JSON.parse(localStorage.getItem('Pokemon'));
    
    pokemonList.innerHTML = ""

    get.map(name =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
           .then( data => {
               data.json()
   
               .then(transformData =>{
   
                   const name = transformData.name;
                   const img = transformData.sprites.front_default;
                   
                   const twice = { name, img };
                   
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
        <button id="deletePoke">
            <i class="fas fa-trash-alt"></i>
        </button>
        <img src="${twice.img}" alt="poke">
    </li>
    `
    deletePoke.addEventListener('click', () =>{
        alert('jijodebutanoscagamostodosderiso')
    })
    
}
