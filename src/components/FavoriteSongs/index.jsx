import React, { useState } from 'react';

import { Container, Song, Button } from './styles';

export default function FavoriteSongs({userFavorites}) {

  const [favorites, setFavorites] = useState(userFavorites);

  const handleDelete = (name) => {
    const newFavorites = userFavorites.filter((favorite) => favorite.artist.name !== name);
    setFavorites(newFavorites);
  }

  return (
    <Container>
      {favorites.map((song) => {
        return (
          <Song>
            artist: {song.artist.name}
            <Button onClick={handleDelete(song.artist.name)}>delete from favorites</Button>
          </Song>          
        )
      })}
    </Container>
  )
}
