const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 35, name: "Clefairy", types: ["normal"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

//an array of pokémon objects where the id is evenly divisible by 3

const div3 = pokemon.filter((p) => {
  //console.log(p);
  return p.id % 3 === 0;
});
console.log(div3);

// an array of pokémon objects that are "fire" type

const fire = pokemon.filter((p) => {
  return p.types.includes("fire");
});
console.log(fire);

// an array of pokémon objects that have more than one type

const moreThanOne = pokemon.filter((poke) => {
  return poke.types.length > 1;
});
console.log(moreThanOne);

// an array with just the names of the pokémon

const pokeName = pokemon.map((p) => p.name);
console.log(pokeName);

// an array with just the names of pokémon with an id greater than 99

const pokeeid = pokemon.filter((chair) => {
  return chair.id > 99;
});
console.log(pokeeid);

// an array with just the names of the pokémon whose only type is poison

const poison = pokemon.filter((p) => {
  if (p.types.length === 1) {
    console.log(p);
    return p.types[0] === "poison";
  }
  // console.log("***" , p. types)
  // return p.types ("poison")
});
const poisonName = poison.map((p) => {
  return p.name;
});
console.log(poisonName);
console.log("poisontypes", poison);

// an array containing just the first type of all the pokémon whose second type is "flying"

const flying = pokemon.filter((p) => {
  if (p.types.length === 2) {
    return p.types[1] === "flying";
  }
});
const firstType = flying.map((p) => {
  return p.types[0];
});
console.log(firstType);

// a count of the number of pokémon that are "normal" type
const normType = pokemon.filter((p) => {
  return p.types.includes("normal");
});
console.log(normType.length);
//an array with all pokemon except the pokemon with the id of 148
const not148 = pokemon.filter((p) => {
  return p.id != 148;
});
console.log(not148);
//an array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy"
const poke2 = pokemon.map((p) => {
  if (p.id == 35) {
    p.types[0] = "fairy";
  }
  return p;
});
console.log(poke2);
