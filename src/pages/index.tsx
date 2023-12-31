import usePokemonTeam from "@/hooks/usePokemonTeam";
import { AppDispatch } from "@/store";
import { filteredPokemons, handleSearch } from "@/store/slices/PokemonList";
import Link from "next/link";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const searchedPokemons = useSelector(filteredPokemons);
  const { isPokemonOnTeam, isPokemonTeamFull, handleTogglePokemon } =
    usePokemonTeam();

  const dispatch = useDispatch<AppDispatch>();

  const handlePokemonSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleSearch(e.target.value));
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl mb-8">POKEMON LIST</h1>
        <input
          placeholder="...SEARCH POKEMON"
          onChange={handlePokemonSearch}
          className="border-white/30 border-2 p-2  outline none bg-black rounded w-full"
          type="text"
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm gap-2 auto-rows-auto">
          {searchedPokemons.map((pokemon) => (
            <li
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
                    alt={pokemon.name}
                  ></img>
                </div>
                <p className="capitalize text-sm mb-2 text-center group-hover:text-yellow-500">
                  {pokemon.name}
                </p>
              </Link>
              <button
                disabled={!isPokemonOnTeam(pokemon) && isPokemonTeamFull}
                onClick={() => handleTogglePokemon(pokemon)}
                className={`text-xs rounded-full border-2 border-white px-2 py-1 hover:animate-pulse-fast w-full disabled:bg-blue-950 disabled:cursor-not-allowed disabled:animate-none ${
                  isPokemonOnTeam(pokemon) ? "bg-red-700" : "bg-blue-700"
                }`}
              >
                {isPokemonOnTeam(pokemon) ? "Remove" : "Add"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
