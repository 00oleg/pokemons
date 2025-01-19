"use client"

import { Button, Card, CardContent, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ScaleIcon from '@mui/icons-material/Scale';
import HeightIcon from '@mui/icons-material/Height';

const PokemonBlock = ({isFavorite, pokemon, handleRemoveFromFavorites, handleAddToFavorites}) => {
    return (
      <Card>
        <CardContent style={{ position: 'relative', padding: '20px' }}>
          <Typography variant="h5" textAlign={'center'} gutterBottom>
            {pokemon.name}
          </Typography>
          <div style={{ textAlign: 'center' }}>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              style={{ width: '100px', height: '100px' }}
            />
          </div>
          <Typography display={'flex'} alignItems={'center'} title="Height"><HeightIcon fontSize={'10px'}/>: {pokemon.height}</Typography>
          <Typography display={'flex'} alignItems={'center'} title="Weight"><ScaleIcon fontSize={'10px'}/>: {pokemon.weight}</Typography>

          {
            isFavorite ? (
              <Button
                variant="text"
                style={{ position: 'absolute', top: '5px', right: '5px', padding: 0, minWidth: 0 }}
                color="secondary"
                onClick={() => handleRemoveFromFavorites(pokemon)}
                title="Remove from Favorites"
              >
                <FavoriteIcon />
              </Button>
            ) : (
              <Button
                variant="text"
                style={{ position: 'absolute', top: '5px', right: '5px', padding: 0, minWidth: 0 }}
                color="secondary"
                onClick={() => handleAddToFavorites(pokemon)}
                title="Add to Favorites"
              >
                <FavoriteBorderIcon />
              </Button>
            )
          }
        </CardContent>
      </Card>
    )
}

export default PokemonBlock;
