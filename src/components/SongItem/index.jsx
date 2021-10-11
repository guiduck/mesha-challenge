import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';

//forceUpdate hook
function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

export default function SongItem({
  artistName, 
  thumbnail, 
  songName,
  id,
  date
}) {

  const forceUpdate = useForceUpdate();

  const songIsFavorited = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    return favorites?.find(song => song.id === id);
  }

  const handleClickItem = () => {

    //testing getting date
  
    const currentDate = new Date().toLocaleString() + "";

    console.log(currentDate);

    const favorites = JSON.parse(localStorage.getItem('favorites'));

    //check if song is favorited to decide either to add or delete
    if (songIsFavorited()) {
      // remove item
      const newFavorites = favorites.filter(song => song.id !== id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
      // add item
      if (!favorites) {
        localStorage.setItem('favorites', JSON.stringify([{ artistName, thumbnail, songName, id, currentDate }]));
      } else {
        //if there is already a fav, just add new song data
        localStorage.setItem('favorites', JSON.stringify([...favorites, { artistName, thumbnail, songName, id, currentDate }]));
      }
    }

    forceUpdate();
  }

  
  return (
    <div>
      <div>
        {/* <Thumbnail src={thumbnail} /> */}
        <div style={{backgroundImage: `url(${thumbnail})`, height: '50px', width: '50px'}} />
        <div>
          <strong>{artistName}</strong>
          <span>{songName}</span>
          <span>{date}</span>
        </div>
      </div>
      <Button onClick={handleClickItem} colorScheme={songIsFavorited() ? 'red' : 'green'} variant='outline'>
        {!songIsFavorited() ? 'Adicionar aos favoritos' : 'Remover dos Favoritos'}
      </Button>      
    </div>
  )
}
