import { AppDispatch } from "@/store";
import {
  addPokemon,
  pokemonTeam,
  removePokemon,
} from "@/store/slices/PokemonTeam";
import Pokemon from "@/types/pokemon";
import { useDispatch, useSelector } from "react-redux";

export default function usePokemonTeam() {
  const team = useSelector(pokemonTeam);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemovePokemon = (pokemon: Pokemon) => {
    dispatch(removePokemon(pokemon.id));
  };

  const handleAddPokemon = (pokemon: Pokemon) => {
    dispatch(addPokemon(pokemon));
  };

  const handleTogglePokemon = (pokemon: Pokemon) => {
    return isPokemonOnTeam(pokemon)
      ? handleRemovePokemon(pokemon)
      : handleAddPokemon(pokemon);
  };

  const isPokemonTeamEmpty = team.length === 0;
  const isPokemonTeamFull = team.length === 6;

  const isPokemonOnTeam = (pokemon: Pokemon) => {
    return team.includes(pokemon);
  };

  return {
    team,
    isPokemonTeamEmpty,
    isPokemonTeamFull,
    isPokemonOnTeam,
    handleTogglePokemon,
    handleAddPokemon,
    handleRemovePokemon,
  };
}
