import createElement from "../utils/elements";
import "./card.css";

export default async function createPokeCard(props) {
  const title = createElement("h2", {
    innerText: props.title.toUpperCase(),
  });

  const pokeIMG = createElement("img", {
    src: `https://img.pokemondb.net/artwork/large/${props.title}.jpg`,
  });

  const pokeDataFetch = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${props.title}`
  );
  const pokeData = await pokeDataFetch.json();
  const pokeDataDiv = createElement("div");

  const pokeWeight = createElement("li", {
    innerText: `Weight: ${pokeData.weight} kg`,
  });
  const pokeHeight = createElement("li", {
    innerText: `Height: ${pokeData.height} cm`,
  });

  pokeDataDiv.append(pokeWeight);
  pokeDataDiv.append(pokeHeight);

  const pokeAbilityListDiv = createElement("div");
  pokeData.abilities.forEach((ability) => {
    const abi = createElement("li", {
      innerText: `POWERMOVE: ${ability.ability.name}`,
    });
    pokeAbilityListDiv.append(abi);
  });

  const pokeCard = createElement(
    "div",
    {
      className: "pokeCard",
    },

    [title, pokeWeight, pokeHeight, pokeIMG, pokeAbilityListDiv]
  );
  return pokeCard;
}
