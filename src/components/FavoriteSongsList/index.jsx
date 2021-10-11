import React from 'react';
import SongItem from '../SongItem';

const FavoriteSongsList = () => {

  const songs = JSON.parse(localStorage.getItem('favorites'));

  //check if is favorite to see if it need a date prop
  const songIsFavorited = (id) => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    return favorites?.find(song => song.id === id);
  }

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
              date={songIsFavorited? song.currentDate : undefined} 
            />
          )          
        })
      }
    </div>
  )
}


export default FavoriteSongsList;