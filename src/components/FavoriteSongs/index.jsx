import React, { useState, useEffect } from 'react';
import FavoriteSongItem from '../FavoriteSongItem';

import { Container } from './styles';

export default function FavoriteSongs({userFavorites}) {

  const [favorites, setFavorites] = useState(userFavorites);

  useEffect(() => {
    setFavorites(userFavorites);
  }, [favorites])

  return (
    <Container>
      {
        favorites &&
        favorites.map((song) => {
        return (
          <>
            <FavoriteSongItem
              artistName={song.artist.name} 
              songName={song.title} 
              thumbnail={song.album.cover_medium} 
            />             
          </>
        )
      })}
    </Container>
  )
}
