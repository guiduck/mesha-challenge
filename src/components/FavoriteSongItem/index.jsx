import { Button } from '@chakra-ui/button';
import React, { useState, useEffect } from 'react'

export default function FavoriteSongItem({
  artistName, 
  thumbnail, 
  songName
}) {

  const [favorites, setFavorites] = useState();

  useEffect(() => {
    setFavorites(getLocalData());
  }, [])
  
  const getLocalData = () => {
    const localData = localStorage.getItem('favorites');

    return localData ? JSON.parse(localData) : [];
  }

  return (
    <div>
      <div>
        {/* <Thumbnail src={thumbnail} /> */}
        <div style={{backgroundImage: `url(${thumbnail})`, height: '50px', width: '50px'}} />
        <div>
          <strong>{artistName}</strong>
          <span>{songName}</span>
        </div>
      </div>
      <Button>
        Delete song
      </Button>      
    </div>
  )
}
