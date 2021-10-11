import React from 'react';
import SongItem from '../SongItem';

const FavoriteSongsList = () => {

  const songs = JSON.parse(localStorage.getItem('favorites'));

  console.log({songs})

  return (
    <div>
      {
        songs &&
        songs.map((song) => {
          return(
            <SongItem
              id={song.id}
              key={song.id}
              artistName={song.artistName} 
              songName={song.songName} 
              thumbnail={song.thumbnail} 
          />
          )          
        })
      }
    </div>
  )
}


export default FavoriteSongsList;