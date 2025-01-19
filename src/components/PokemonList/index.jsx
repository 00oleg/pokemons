"use client"

import PokemonBlock from "@/components/Pokemon";
import { addItem, deleteItem } from "@/store/favoritesReducer";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const PokemonList = ({list = []}) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.values);

  const handleRemoveFromFavorites = (pokemon) => {
    dispatch(deleteItem(pokemon.id));
  }

  const handleAddToFavorites = (pokemon) => {
    dispatch(addItem(pokemon));
  }

  if (!list.length) {
    return ('');
  }

  return (
    <Stack direction="row" justifyContent={'center'} gap={2} flexWrap={'wrap'}>
    {
      list.map((pokemon) => {
        const isFavorite = favorites.find((favorite) => favorite.id === pokemon.id) ? true : false;

        return (
          <PokemonBlock
            key={pokemon.id} 
            isFavorite={isFavorite} 
            pokemon={pokemon} 
            handleRemoveFromFavorites={handleRemoveFromFavorites} 
            handleAddToFavorites={handleAddToFavorites} 
          />
        )
      })
    }
    </Stack>
  )
}

export default PokemonList;
