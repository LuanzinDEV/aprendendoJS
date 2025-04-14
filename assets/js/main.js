const pokemonList = document.getElementById('pokemonList');
const botaoLoad = document.getElementById('loadMoreButton');
const limit = 9
let offset = 0

function convertPokemonToLI(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type ${typeSlot.type.name}"> ${typeSlot.type.name}</li>`)
}

function convertPokemonToHTML(pokemon) {
    return `
        <li class="pokemon ${pokemon.types[0].type.name}">
            <span class="number">#${pokemon.id}</span>   
            <span class="name">${pokemon.name}</span>              
            <div class="detail">
                <ol class="types">
                    ${convertPokemonToLI(pokemon.types).join('')}
                </ol>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        </li>
    `
}

pokeApi.getPokemons(offset, limit).then( (pokemons) => {
    pokemonList.innerHTML += pokemons.map(pokemon => convertPokemonToHTML(pokemon)).join('')
})

botaoLoad.addEventListener("click", function() {
    offset += limit;
    pokeApi.getPokemons(offset, limit).then( (pokemons) => {
        pokemonList.innerHTML += pokemons.map(pokemon => convertPokemonToHTML(pokemon)).join('')
    })
}

);





