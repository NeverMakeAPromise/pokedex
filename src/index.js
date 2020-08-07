import createElement from "./utils/elements";
import { catchEmAll } from "./api/pokeApi";

const headline = createElement("h1", { innerText: "Pokedex" });

const fetchButton = createElement("button", { innerText: "CATCH 'EM ALL" });

fetchButton.addEventListener("click", async () => {
  const pokeDex = await catchEmAll();
  pokeDex.forEach((pokemon) => {
    const pokeDexEntry = createElement("li", { innerText: pokemon.name });
    pokeList.append(pokeDexEntry);
  });
});

const pokeList = createElement("ul");

document.body.append(headline);
document.body.append(fetchButton);
document.body.append(pokeList);
