"use client"

import { CircularProgress, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

const SeachBar = ({handleSetPokemon}) => {
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

    const handleLoading = (value = false) => {
      setLoading(value);
    }

    const handleQuery = (e) => {
      setQuery(e.target.value);
    }
  
    const handleSubmitSearchPokemon = async (e) => {
      e.preventDefault();
  
      if (!query.length) {
        handleSetPokemon(undefined);
  
        return true;
      }
  
      handleLoading(true);
  
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
        const data = await response.json();
        handleSetPokemon(response.ok ? data : null);
      } catch (error) {
        console.log('error', error);
        handleSetPokemon(null);
      } finally {
        handleLoading(false);
      }
  
      return true;
    }

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            onSubmit={handleSubmitSearchPokemon}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Pokemons"
                inputProps={{ 'aria-label': 'search google maps' }}
                value={query}
                onChange={handleQuery}
                disabled={loading}
            />
            <IconButton type="submit" disabled={loading} aria-label="search">
            {
                loading ? (
                    <CircularProgress size="24px" />
                ) : (
                    <SearchIcon />
                )
            }
            </IconButton>
        </Paper>
    )
}

export default SeachBar;
