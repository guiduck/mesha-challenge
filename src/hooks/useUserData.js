import { useState, useEffect } from 'react'

import getGenre from '../utils/getGenre'

import useLocation from './useLocation'
import useWeather from './useWeather'
import useSongByGenre from './useSongByGenre'

const useUserData = () => {

  const [userData, setUserData] = useState({
    temperature: null,
    location: {
      city: '',
      country: '',
    },
    songs: [],
    isLoaded: false,
  })

  //getting userLocation into state
  const {
    location: userLocation, 
    error: locationError, 
    isLoaded: locationIsLoaded
  } = useLocation();

  //getting usertemperature into state
  const { 
    temperature: userTemperature, 
    error: temperatureError,
    isLoaded: temperatureIsLoaded 
  } = useWeather(userLocation);

  const {
    songs: userSongs, 
    isLoaded: songsIsLoaded 
  } = useSongByGenre(getGenre(userTemperature), temperatureIsLoaded);

  //set user data state - maybe do it in another component
  useEffect(() => {
        setUserData({
          temperature: userTemperature,
          location: userLocation,
          songs: userSongs,
          isLoaded: true, 
        });
  }, [])

  return userData;

}

export default useUserData;