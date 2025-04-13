

function convertPokemonToLI(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type ${typeSlot.type.name}"> ${typeSlot.type.name}</li>`)
}

function convertPokemonToHTML(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>              
            <div class="detail">
                <ol class="types">
                    ${convertPokemonToLI(pokemon.types).join('')}
                </ol>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

const botaoLoad = document.getElementById('loadMoreButton');

botaoLoad.addEventListener("click", function() {

}

);


pokeApi.getPokemons().then( (pokemons) => {
    pokemonList.innerHTML += pokemons.map(pokemon => convertPokemonToHTML(pokemon)).join('')
})


