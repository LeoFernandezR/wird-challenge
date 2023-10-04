import usePokemonTeam from "@/hooks/usePokemonTeam";
import { AppDispatch } from "@/store";
import { getPokemons, loadingPokemons } from "@/store/slices/PokemonList";
import { removePokemon } from "@/store/slices/PokemonTeam";
import Pokemon from "@/types/pokemon";
import { ReactNode, useEffect } from "react";
import { MdGamepad } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

interface LayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  const loading = useSelector(loadingPokemons);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemovePokemon = (pokemon: Pokemon) => {
    dispatch(removePokemon(pokemon.id));
  };

  const { team, isPokemonTeamEmpty } = usePokemonTeam();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <main className="min-h-screen h-full text-white flex max-h-screen">
      <section className="flex-[2.5] flex">
        <div className="p-10 bg-yellow-500 flex-1 flex">
          <div className="px-12 py-6 rounded-xl flex-1 bg-black flex flex-col">
            {loading ? (
              <div className="flex-1 flex justify-center items-center">
                <h1 className="text-3xl">LOADING...</h1>
              </div>
            ) : (
              children
            )}
          </div>
        </div>
      </section>
      <aside className="bg-yellow-500 flex-1 flex flex-col p-10 pl-0">
        <div className="max-h-[450px] h-full flex flex-col justify-center">
          <div className="rounded-lg bg-black h-full flex flex-col items-center pt-6">
            <h2 className="text-2xl text-center mb-4">Pokemon Team</h2>
            {isPokemonTeamEmpty ? (
              <div className="flex flex-1 justify-center items-center">
                <p className="text-xs xl:text-base">
                  You don&apos;t have a team :(
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 p-2">
                {team.map((pokemon) => (
                  <div
                    key={pokemon.id}
                    className="border-2 border-white relative"
                  >
                    <div className="flex gap-2 items-center flex-col xl:flex-row flex-1">
                      <div className="w-16 h-16 xl:h-20 xl:w-20">
                        <img
                          className="w-full"
                          src={pokemon.sprites.front_default}
                          alt={pokemon.name}
                          style={{
                            imageRendering: "pixelated",
                          }}
                        ></img>
                      </div>
                      <p className="capitalize text-xs mb-2">{pokemon.name}</p>
                    </div>
                    <button
                      onClick={() => handleRemovePokemon(pokemon)}
                      className="text-xs absolute top-0 right-0 m-2"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 relative">
          <span className="bg-red-500 border-red-700 border-2 rounded-full p-3 pt-2 pl-4 absolute right-0 bottom-20">
            A
          </span>
          <span className="bg-green-700 border-green-900 border-2 rounded-full p-3 pt-2 pl-4 absolute right-14 bottom-6">
            B
          </span>
          <div></div>
          <MdGamepad className="text-blue-700 absolute left-4 bottom-10 text-8xl"></MdGamepad>
        </div>
      </aside>
    </main>
  );
}
