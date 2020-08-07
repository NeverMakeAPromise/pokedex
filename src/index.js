import createElement from "./utils/elements";
import catchEmAll from "./api/pokeApi";
import createPokeCard from "./components/pokeCard";
import "../dist/global.css";

const headline = createElement("h1", { innerText: "Pokedex" });

const fetchButton = createElement("button", { innerText: "CATCH 'EM ALL" });

fetchButton.addEventListener("click", async () => {
  const pokeDex = await catchEmAll();
  pokeDex.forEach(async (pokemon) => {
    const pokeDexEntry = await createPokeCard({
      title: pokemon.name,
    });
    pokeList.append(pokeDexEntry);
  });
});

const pokeList = createElement("ul");

document.body.append(headline);
document.body.append(fetchButton);
document.body.append(pokeList);
