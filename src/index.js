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