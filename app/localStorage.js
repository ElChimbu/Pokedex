Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

export const pokeLocalStorage = (pokemonArray) =>{
    let newPokemonArray = pokemonArray.unique()

    localStorage.setItem('Pokemon', newPokemonArray);

    getPokemon()
}

const getPokemon = () =>{
    const get = localStorage.getItem('Pokemon');
    let insideArray = [get]
    printPokemonList()
    console.log(insideArray)
}

export const printPokemonList = (array) =>{
    console.log(array)
}