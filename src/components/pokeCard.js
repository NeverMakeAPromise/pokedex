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
  const pokeAbility = createElement("p", {
    innerText: `JAVASCRIPT POWER: ${pokeData.abilities[0].ability.name}`,
  });
  const pokeCard = createElement(
    "div",
    {
      className: "pokeCard",
    },

    [title, pokeWeight, pokeIMG, pokeAbility]
  );
  return pokeCard;
}
