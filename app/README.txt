****INDEX.JS****
    Contiene solo eventos del DOM, el cual solo dipara la funcion addPokemon

****CLASS.JS****
    Es el modelo de datos utilizado para organizar los datos del pokemon en cuestion

****APP.JS****
    Contiene las funciones basicas de la aplicacion:
        -addPokemon: Ejecuta un fetch a la pokeAPI, luego de transformar los datos, en la segunda promesa
                     organiza los datos que interesan en constantes para luego encerrarlos a todos en una
                     constante llamada "ALL".