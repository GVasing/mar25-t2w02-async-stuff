let favouritePokemon = [
    "haunter",
    "tyranitar",
    "gengar",
    "snorlax",
    "jigglypuff",
    "bulbasaur",
    "hitmonlee",
    "blastoise",
    "pikachu"
];

favouritePokemon.forEach((individualName) => {
    console.log("This is a super cool Pokemon: " + individualName)
});

setTimeout(() => {
    console.log("Subscribe to the newsletter");
}, 5000);

console.log("Page loaded");

// Make API request to this endpoint to get Pokemon data:
// https://pokeapi.co/api/v2/pokemon/

function getPokemonData(targetPokemon) {
    let result = fetch("https://pokeapi.co/api/v2/pokemon/" + targetPokemon).then((response) => {
        console.log(response);
        // If the response body contains json data, return that as a valid JSON object.  Just like in the previous flask app.
        return response.json();
    }).then((jsonResponse) => {
        console.log(JSON.stringify(jsonResponse, null, 4));
        return jsonResponse;
    });

    console.log(result);
    setTimeout(() => {
        console.log(result)
    }, 2000);
};

getPokemonData("pikachu");