export default async function catchEmAll() {
  const allPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
  const data = await allPokemon.json();
  console.log(data.results);
  return data.results;
}
