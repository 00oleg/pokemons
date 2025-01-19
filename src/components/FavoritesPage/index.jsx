"use client";

import PokemonList from "@/components/PokemonList";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";

export default function FavoritesPage() {
  const favoritesList = useSelector((state) => state.favorites.values);
  
  if (!favoritesList.length) {
    return (
      <Alert severity="info">Favorite list is empty!</Alert>
    );
  }

  return (
    <PokemonList list={favoritesList} />
  );
}
