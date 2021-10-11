import React, { useState, useEffect } from 'react';
import FavoriteSongItem from '../FavoriteSongItem';

export default function FavoriteSongs({userFavorites}) {

  return (
    <div>
      {
        userFavorites &&
        userFavorites.map((song) => {
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
    </div>
  )
}
