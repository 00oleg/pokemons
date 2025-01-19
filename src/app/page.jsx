"use client"

import { Alert, Stack } from "@mui/material";
import { useState } from "react";
import PokemonList from "@/components/PokemonList";
import SeachBar from "@/components/SeachBar";

export default function Home() {
  const [pokemon, setPokemon] = useState(undefined);

  const handleSetPokemon = (value) => {
    setPokemon(value);
  }

  return (
    <Stack alignItems={'center'} gap={2}>
      <SeachBar handleSetPokemon={handleSetPokemon}/>

      {
        pokemon ? (
          <PokemonList list={[{...pokemon}]} />
        ) : (
          pokemon === null ? (
            <Alert severity="info">Pokemon not found</Alert>
          ) : (
            ''
          )
        )
      }
    </Stack>
  );
}
