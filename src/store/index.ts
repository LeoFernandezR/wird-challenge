import { configureStore } from "@reduxjs/toolkit";
import pokemonListSlice from "./slices/PokemonList";
import pokemonTeamSlice from "./slices/PokemonTeam";

const store = configureStore({
  reducer: {
    pokemonList: pokemonListSlice.reducer,
    pokemonTeam: pokemonTeamSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
