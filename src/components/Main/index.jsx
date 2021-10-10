import React, { useState, useEffect } from 'react'

import SongList from '../SongList';
import FavoriteSongs from '../FavoriteSongs';

import { 
  Container, 
  Button,
  Title
} from './styles'

export default function Main() {

  const [isLoading, setIsLoading] = useState(true);
  const [favoriteSongList, setFavoriteSongList] = useState([]);
    
  const clickHandler = () => {
    
  }

  return (
    <Container>
      {/* {
        userData.isLoaded ? `location: ${JSON.stringify(userData.location)} temperature: ${userData.temperature}` : <div>Loading...</div>
      } */}
      {/* {isLoading && <Title>Loading...</Title>}
      {songList && <SongList songs={songList} />} */}
      {/* <FavoriteSongs userFavorites={songList} /> */}
      <SongList />
      
      <Button onClick={clickHandler}>get songs</Button>
    </Container>
  )
}
