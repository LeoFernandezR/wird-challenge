import { RootState } from "@/store";
import { loadingPokemons, pokemonById } from "@/store/slices/PokemonList";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { TbArrowBigLeftLineFilled } from "react-icons/tb";
import { useSelector } from "react-redux";

type Props = {};

const PokemonPage = (props: Props) => {
  const { query } = useRouter();
  const id = query.id as string;
  const pokemon = useSelector((state: RootState) =>
    pokemonById(state, parseInt(id))
  );

  console.log(pokemon);

  return (
    <div className="relative h-full flex-1 flex flex-col ">
      <h1 className="text-2xl mb-4">POKEDEX N-{id}</h1>
      <Link
        className="absolute top-0 right-0  text-lg hover:animate-pulse-fast"
        href="/"
      >
        <span className="pl-2 pr-2 pb-2 border-2 mr-1 border-white rounded-full">
          <TbArrowBigLeftLineFilled className="text-white inline text-3xl mr-2" />
          BACK
        </span>
      </Link>
      <div className="flex-1 flex gap-2 flex-row-reverse">
        <div className="flex-1 items-center flex flex-col justify-center">
          <div className="w-60">
            <img
              src={pokemon?.sprites.front_default}
              alt={pokemon?.name}
              className="w-full"
              style={{
                imageRendering: "pixelated",
              }}
            />
            <img
              src={pokemon?.sprites.back_default}
              alt={pokemon?.name}
              className="w-full"
              style={{
                imageRendering: "pixelated",
              }}
            />
          </div>
        </div>
        <div className="flex-2 capitalize text-lg flex flex-col justify-center">
          <div className="flex gap-2 flex-col px-2">
            <p>
              <span className="underline">Name:</span>{" "}
              <span>{pokemon?.name}</span>
            </p>
            <p>
              <span className="underline">Height:</span>{" "}
              <span>{pokemon?.height}</span>
            </p>
            <p>
              <span className="underline">Number:</span>{" "}
              <span>{pokemon?.id}</span>
            </p>
            <p>
              <span className="underline">Type:</span>{" "}
              <span className="">
                {pokemon?.types.map((poke) => poke.type.name).join(", ")}
              </span>
            </p>
            <div>
              <p className="mb-2 underline">Base Stats:</p>
              <ul className="pl-8 list-disc flex flex-col gap-2 text-base">
                {pokemon?.stats.map((poke) => (
                  <li key={poke.stat.url}>
                    <p>
                      <span className="underline">{poke.stat.name}:</span>{" "}
                      <span>{poke.base_stat}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
