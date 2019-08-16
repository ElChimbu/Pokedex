//Constants

const form = document.querySelector('#form');
const firstScreen = document.querySelector('.screen');

//DOM events

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    addPokemon()
})

//Classs

class Pokemon{
    constructor(name, attack1, attack2, type, weight, exp, img, location){
        this.name = name;
        this.attack1 = attack1;
        this.attack2 = attack2;
        this.type = type;
        this.weight = weight;
        this.exp = exp;
        this.img = img;
        this.location = location;
    }
}

//Arrow functions

const notFoundPokemon = (error) =>{
    if(error.status !== 200){
        return firstScreen.innerHTML = `
        <p class="error">Error ${error.status} pokemon not found</p>        `
    }

}

const pokemonData = (pokeData) =>{
    
    fetch(pokeData.fetchLocation)
        .then( response =>{
            response.json()
            .then(location => {
                const currentLocation = location[0].location_area.name.replace(/-/g, " ");

                 NewPokemon = new Pokemon(pokeData.name, pokeData.attack1, pokeData.attack2, pokeData.type, pokeData.weight, pokeData.exp, pokeData.img, currentLocation );
                 console.log(NewPokemon);
                 printPokemon(NewPokemon);

            })

    })

}

const addPokemon = () =>{
    let value = document.querySelector('#pokemon').value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then( data =>{
            
            notFoundPokemon(data)

            data.json()
            .then(transformData =>{
                const name = transformData.name;
                const attack1 = transformData.abilities[0].ability.name;
                const attack2 = transformData.abilities[1].ability.name;
                const type = transformData.types[0].type.name;
                const weight = transformData.weight;
                const exp = transformData.base_experience;
                const img = transformData.sprites.front_default;
                const fetchLocation = transformData.location_area_encounters;

                
                const all = {name, attack1, attack2, type, weight, exp, img, fetchLocation}
                
                pokemonData(all)
                
           })
        }).catch( err => console.log(err))
    
    form.reset();
}

const setExp = (exp) =>{
    if(exp > 100){
        return 100
    }
}

const printPokemon = (pokemon) =>{
    firstScreen.innerHTML = ''

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
            <div class="weight">
                <span>Weight:</span>
                <p>${pokemon.weight} kg</p>
            </div>
            <div class="type">
                <span>Type: ${pokemon.type}</span>
            </div>
            <div class="exp">
                <span>Exp: ${pokemon.exp}</span>
                <div class="stats">
                    <div class="bar" style="width: ${setExp(pokemon.exp)}%"></div>
                </div>
            </div>
    `

}