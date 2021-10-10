import React, { useState, useEffect } from 'react'
import useUserData from '../../hooks/useUserData';

import SongList from '../SongList';
import FavoriteSongs from '../FavoriteSongs';

import { 
  Container, 
  Button,
  Title
} from './styles'

export default function Main() {

  const [isLoading, setIsLoading] = useState(true);
  const [songList, setSongList] = useState([]);
  const [userData, setUserData] = useState({
    temperature: null,
    city: '',
  });

  const data = useUserData();
  console.log(data);

  useEffect(() => {
    setUserData({
      temperature: data.temperature,
      city: data.location.city,
    });
    setSongList(data.songs);
  }, [])
    
  const addSongsToList = () => {
    setSongList(data.songs);
    if(songList) {
      setIsLoading(false);
      console.log(songList);
    } else {
      console.log('song list does not exist');
    }
  }

  return (
    <Container>
      {/* {
        userData.isLoaded ? `location: ${JSON.stringify(userData.location)} temperature: ${userData.temperature}` : <div>Loading...</div>
      } */}
      {isLoading && <Title>Loading...</Title>}
      {songList && <SongList songs={songList} />}
      {/* <FavoriteSongs userFavorites={songList} /> */}
      
      <Button onClick={addSongsToList}>get songs</Button>
    </Container>
  )
}
