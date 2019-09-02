
//Export
export const deepScreen = document.querySelector('.deepScreen');

//Funcion que evita que se repitan los elementos del array, es la razon de por que hice un doble fetch (linea 28)
Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

export const pokeLocalStorage = (pokemonArray) =>{
    let newPokemonArray = pokemonArray.unique()

    localStorage.setItem('Pokemon', JSON.stringify(newPokemonArray));
}




