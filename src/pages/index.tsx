import { AppDispatch } from "@/store";
import { filteredPokemons, handleSearch } from "@/store/slices/PokemonList";
import {
  addPokemon,
  pokemonTeam,
  removePokemon,
} from "@/store/slices/PokemonTeam";
import Pokemon from "@/types/pokemon";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const team = useSelector(pokemonTeam);
  const searchedPokemons = useSelector(filteredPokemons);

  const dispatch = useDispatch<AppDispatch>();

  const handlePokemonTeam = (pokemon: Pokemon) => {
    if (team.includes(pokemon)) {
      return dispatch(removePokemon(pokemon.id));
    }

    dispatch(addPokemon(pokemon));
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl mb-8">POKEMON LIST</h1>
        <input
          placeholder="...SEARCH POKEMON"
          onChange={(e) => dispatch(handleSearch(e.target.value))}
          className="border-white/30 border-2 p-2  outline none bg-black rounded w-full"
          type="text"
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm gap-2 auto-rows-auto">
          {searchedPokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="p-2 flex justify-center items-center flex-col max-h-min"
            >
              <Link
                href={`/pokemon/${pokemon.id}`}
                className="hover:cursor-pointer group transition-all"
              >
                <div className="w-36 h-36 group-hover:brightness-75">
                  <img
                    className="w-full"
                    src={pokemon.sprites.front_default}
                    style={{
                      imageRendering: "pixelated",
                    }}
                  ></img>
                </div>
                <p className="capitalize text-sm mb-2 text-center group-hover:text-yellow-500">
                  {pokemon.name}
                </p>
              </Link>
              <button
                disabled={!team.includes(pokemon) && team.length === 6}
                onClick={() => handlePokemonTeam(pokemon)}
                className={`text-xs rounded-full border-2 border-white px-2 py-1 hover:animate-pulse-fast w-full disabled:bg-blue-950 disabled:cursor-not-allowed disabled:animate-none ${
                  team.includes(pokemon) ? "bg-red-700" : "bg-blue-700"
                }`}
              >
                {team.includes(pokemon) ? "Remove" : "Add"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
