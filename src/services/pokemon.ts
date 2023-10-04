import Pokemon, { PartialPokemon } from "@/types/pokemon";

export const fetchPokemonList = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

  const data = await response.json();

  const pokemonList = data.results as PartialPokemon[];

  const pokemonPromise = pokemonList.map((pokemon) =>
    fetch(pokemon.url).then((res) => res.json())
  );
  const pokemons = (await Promise.all(pokemonPromise)) as Pokemon[];

  return pokemons;
};
