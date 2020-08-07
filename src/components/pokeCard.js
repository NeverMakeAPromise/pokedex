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
  const pokeWeight = createElement("p", {
    innerText: `Weight: ${pokeData.weight} kg`,
  });

  console.log(pokeData.abilities);

  const pokeCard = createElement(
    "div",
    {
      className: "pokeCard",
    },

    [title, pokeWeight, pokeIMG]
  );

  const pokeAbilityListDiv = createElement("div");

  pokeData.abilities.forEach((ability) => {
    const abi = createElement("li", {
      innerText: `JAVASCRIPT POWERMOVE: ${ability.ability.name}`,
    });
    pokeAbilityListDiv.append(abi);
  });
  pokeCard.append(pokeAbilityListDiv);
  return pokeCard;
}
