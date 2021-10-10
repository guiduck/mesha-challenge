import React, { useState } from 'react'

import SongList from '../SongList';
import FavoriteSongs from '../FavoriteSongs';
import useUserData from '../../hooks/useUserData';

import { 
  Container, 
  GetSongsButton
} from './styles'

export default function Main() {
  const [userFavorites, setUserFavorites] = useState([]);
  const [userIsLoading, setUserIsLoading] = useState(true);
    
  const data = useUserData();
  console.log(data)

  const clickHandler = () => {
    console.log('has clicked')
    setUserFavorites(data.songs);
    if(userFavorites) {
      console.log(userFavorites);
      setUserIsLoading(false);
    } else {
      console.log('user still loading in main');
    }
  }

  return (
    <Container>
      {/* {
        userData.isLoaded ? `location: ${JSON.stringify(userData.location)} temperature: ${userData.temperature}` : <div>Loading...</div>
      } */}
      {/* {isLoading && <Title>Loading...</Title>}
      {songList && <SongList songs={songList} />} */}
      {/* <FavoriteSongs userFavorites={songList} /> */}
      

      {
        data && <SongList />,
        userIsLoading && <div>Loading...</div>,
        !userIsLoading && <FavoriteSongs userFavorites={userFavorites} />
      }
      
      <GetSongsButton onClick={clickHandler}>get songs</GetSongsButton>
    </Container>
  )
}
