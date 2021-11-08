// POKEDEX PROJECT

const pokeContainer = document.querySelector(`#container`);
// Number of Pokemon (Objects) in the PokeAPI
const numOfPokemon = 151;

// The createPokeCard function creates a new card and adds the card to the webpage inside of the div with the id of "container"
// NOTE: The value/argument that will be passed in for the "pokemon" parameter will be the response received from an Axios request to the PokeAPI
function createPokeCard(pokemon){
  const pokeCard = document.createElement(`section`);
  pokeCard.classList.add(`pokemon`);
  pokeContainer.append(pokeCard);
  // Setting the innerHTML for the new card using the data that is passed into the "pokemon" parameter
  pokeCard.innerHTML = `
  <div class="img-container">
  <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}">
  </div>
  <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
  `;
}