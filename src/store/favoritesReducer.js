import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const pokemon = action.payload;

      if (!state.values.find((favorite) => favorite.id === pokemon.id)) {
        state.values = [
          ...state.values,
          { 
            id: pokemon.id, 
            name: pokemon.name, 
            height: pokemon.height, 
            weight: pokemon.weight, 
            sprites: { front_default: pokemon.sprites.front_default },
          }
        ];
  
        localStorage.setItem('favorites', JSON.stringify(state.values));
      }
    },
    deleteItem: (state, action) => {
      state.values = state.values.filter((favorite) => favorite.id !== action.payload)
      localStorage.setItem('favorites', JSON.stringify(state.values));
    },
    initItems: (state, action) => {
      state.values = [...action.payload];
    },
  },
});

export const { addItem, deleteItem, initItems } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
