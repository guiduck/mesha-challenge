import React, { useState, useEffect } from 'react'
import useUserData from '../../hooks/useUserData';

// import getGenre from '../../utils/getGenre'

// import useWeather from '../../hooks/useWeather'
// import useSongByGenre from '../../hooks/useSongByGenre'

import { Container } from './styles'

export default function Main() {

  // const [userData, setUserData] = useState({
  //   temperature: null,
  //   location: {
  //     city: '',
  //     country: '',
  //   },
  //   songs: [],
  //   userIsLoaded: false,
  // })

  // const { 
  //   location: userLocation,
  //   locationError,
  //   temperature: userTemperature, 
  //   temperatureError,
  //   isLoaded: temperatureIsLoaded 
  // } = useWeather();

  // const SongsGenre = getGenre(userTemperature);

  // //getting songs array with useSongByGenre hook
  // const {
  //   songs: userSongs, 
  //   isLoaded: songsIsLoaded 
  // } = useSongByGenre(SongsGenre, temperatureIsLoaded);

  //   //set user data state - maybe do it in another component
  //   useEffect(() => {
  //     // const timer = setTimeout(() => {
  //       if(!userTemperature || !userLocation || !userSongs) {
  //         console.log('still loading data');
  //       } else {
  //         setUserData({
  //         temperature: userTemperature,
  //         location: userLocation,
  //         songs: userSongs,
  //         isLoaded: true,
  //       })
  //       }
  //     //  }, 1000);
      
  //     // return () => clearTimeout(timer);
  //   }, [userSongs])
  
    //get userData
    const userData = useUserData();
    const { temperature, location, songs, isLoaded } = userData;
  
  
  return (
    <Container>
      {
        isLoaded ? `location: ${JSON.stringify(location)} temperature: ${temperature}` : <div>Loading...</div>
      }
    </Container>
  )
}
