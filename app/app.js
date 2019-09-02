//Imports
import {pokeLocalStorage} from './localStorage.js';
import {deepScreen} from './localStorage.js';


//Variables
let pokemonArray = []
let pokemonSign = document.querySelector('.capture');
let capture_btn = document.querySelector('.btn');


//Se utiliza como contador del toogle (linea 51)
let toggeleCounter = 1;

//Exports
export const firstScreen = document.querySelector('.screen');


export const addPokemon = () => {
    firstScreen.style.display = "inherit";
    deepScreen.style.display = "none";
    
    let value = document.querySelector('#pokemon').value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then( data =>{
            data.json()
            .then(transformData =>{

                pokemonSign.style.display = "inherit";
                capture_btn.style.background = "#337a4a"

                const name = transformData.name;
                const attack1 = transformData.abilities[0].ability.name;
                const attack2 = transformData.abilities[1].ability.name;
                const type = transformData.types[0].type.name;
                const weight = transformData.weight;
                const exp = transformData.base_experience;
                const img = transformData.sprites.front_default;
                const id = transformData.id;


                const all = {name, attack1, attack2, type, weight, exp, img, id}

                pokemonLocationData(all);

                pokemonArray.push(name)
                pokeLocalStorage(pokemonArray, name)
                
           }).catch(() => notFoundPokemon(data))
        })
    
    form.reset();
}

export const handleToggle = () => {
    if(toggeleCounter == 1){
        firstScreen.style.display = "none";
        deepScreen.style.display = "inherit";

        toggeleCounter = 0
    }else{
        firstScreen.style.display = "inherit";
        deepScreen.style.display = "none";
        toggeleCounter = 1; 
    }
}

//Arrow Func

const notFoundPokemon = (error) =>{
    if(error.status !== 200){
         firstScreen.innerHTML = `
        <p class="error">Error type: "${error.status}"[pokemon not found]</p> `
    }


}

const pokemonLocationData = (pokeData) =>{
    
    fetch(`https://pokeapi.co/api/v2/location/${pokeData.id}/`)
        .then( response =>{
            response.json()
            .then(location => {
                const currentLocation = location.areas[0].name.replace(/-/g, " ");
                let NewPokemon = {
                    "name": pokeData.name,
                    "attack1": pokeData.attack1,
                    "attack2": pokeData.attack2,
                    "type": pokeData.type,
                    "weight": pokeData.weight,
                    "exp": pokeData.exp,
                    "img": pokeData.img,
                    "location": currentLocation
                }
                 printPokemon(NewPokemon);
            })

    });

}


//Setea el width para que solo vaya del 0 a 100, de esa manera no sale de su contenedor. REF: linea 127

const setExp = (exp) =>{
    if(exp > 100){
        return 100
    }
}

const printPokemon = (pokemon) =>{

    firstScreen.innerHTML = `
            <h3>${pokemon.name}</h3>
            <div class="img">
            <img src="${pokemon.img}" alt="${pokemon.name}">
            </div>
            <div class="abilities">
                <p class="text-skills">
                    Attacks/abilities
                </p>
                <ul>
                    <li>
                        <p>
                            ${pokemon.attack1}
                        </p>
                    </li>
                    <li>
                        <p>
                        ${pokemon.attack2}
                        </p>
                    </li>
                </ul>
            </div>
            <div class="type">
                <span>Type: ${pokemon.type}</span>
            </div>
            <div class="exp">
                <span>Base exp: ${pokemon.exp}</span>
                <div class="stats">
                    <div class="bar" style="width: ${setExp(pokemon.exp)}%"></div>
                </div>
            </div>
            <div class="currentLocation">
                <p>Current location:</p>
                <p>${pokemon.location}</p>
            </div>
    `
}
