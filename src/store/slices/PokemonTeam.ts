import Pokemon from "@/types/pokemon";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState = {
  team: [] as Pokemon[],
};

const pokemonTeamSlice = createSlice({
  name: "pokemonTeam",
  initialState,
  reducers: {
    addPokemon(state, action: PayloadAction<Pokemon>) {
      if (state.team.length >= 6) {
        return;
      }

      if (state.team.includes(action.payload)) {
        return;
      }

      state.team = [...state.team, action.payload];
    },
    removePokemon(state, action: PayloadAction<Pokemon["id"]>) {
      state.team = state.team.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});

export const { addPokemon, removePokemon } = pokemonTeamSlice.actions;

export const pokemonTeam = (state: RootState) => state.pokemonTeam.team;

export default pokemonTeamSlice;
