const form = document.querySelector('#form');
const firstScreen = document.querySelector('.screen');

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    addPokemon()
})


class Pokemon{
    constructor(name, attack1, attack2, type, weight, exp, img){
        this.name = name;
        this.attack1 = attack1;
        this.attack2 = attack2;
        this.type = type;
        this.weight = weight;
        this.exp = exp;
        this.img = img;
    }
}

const addPokemon = () =>{
    let value = document.querySelector('#pokemon').value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then( data =>{
            if(data.status !== 200){
                firstScreen.innerHTML = `
                    <h3>Not Found your Pokemon</h3>
                `
            }
            data.json()
            .then(transformData =>{
                const name = transformData.name;
                const attack1 = transformData.abilities[0].ability.name;
                const attack2 = transformData.abilities[1].ability.name;
                const type = transformData.types[0].type.name;
                const weight = transformData.weight;
                const exp = transformData.base_experience;
                const img = transformData.sprites.front_default;


                var NewPokemon = new Pokemon(name, attack1, attack2, type, weight, exp, img);
            
                printPokemon(NewPokemon);
            })
        }).catch( err => console.log(err))
    
    form.reset();
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
                    <div class="bar" style="width: ${pokemon.exp}%"></div>
                </div>
            </div>
    `

}

