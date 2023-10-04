import Pokemon from "@/types/pokemon";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { fetchPokemonList } from "@/services/pokemon";

interface initialState {
  pokemons: Pokemon[];
  loading: boolean;
  error: null | string;
  filteredPokemons: Pokemon[];
}

const initialState: initialState = {
  pokemons: [],
  loading: true,
  error: null,
  filteredPokemons: [],
};

export const getPokemons = createAsyncThunk(
  "pokemonList/getPokemons",
  fetchPokemonList
);

const pokemonListSlice = createSlice({
  initialState,
  name: "pokemonList",
  reducers: {
    handleSearch(state, action: PayloadAction<string>) {
      if (action.payload === "") {
        state.filteredPokemons = state.pokemons;
        return;
      }

      state.filteredPokemons = state.pokemons.filter((poke: any) =>
        poke.name.toLowerCase().includes(action.payload.toLocaleLowerCase())
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(getPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
      state.filteredPokemons = action.payload;
      state.loading = false;
    });
    builder.addCase(getPokemons.rejected, (state, action) => {
      state.error = action.error.message || null;
      state.loading = false;
    });
  },
});

export const loadingPokemons = (state: RootState) => state.pokemonList.loading;
export const pokemonList = (state: RootState) => state.pokemonList.pokemons;
export const pokemonById = (state: RootState, id: Pokemon["id"]) =>
  state.pokemonList.pokemons.find((pokemon) => pokemon.id === id);
export const errorPokemons = (state: RootState) => state.pokemonList.error;
export const filteredPokemons = (state: RootState) =>
  state.pokemonList.filteredPokemons;

export const { handleSearch } = pokemonListSlice.actions;

export default pokemonListSlice;
