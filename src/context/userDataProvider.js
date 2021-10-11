import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import useLocation from "../hooks/useLocation";
import useSongByGenre from "../hooks/useSongByGenre";
import useWeather from "../hooks/useWeather";
import getGenre from "../utils/getGenre";

const UserDataContext = createContext({
  temperature: null,
  location: {
    city: '',
    country: '',
  },
  songs: [],
  isLoaded: false,
});

export const UserDataProvider = ({ children, useMyLocation = false, city, country }) => {

  const canRequest = useMyLocation === true || (city !== '' && country !== '');

  
  const [userData, setUserData] = useState({
    temperature: null,
    location: {
      city: '',
      country: '',
    },
    songs: [],
    isLoaded: false,
  });
  
  //getting userLocation into state
  const {
    location: userLocation, 
    error: locationError, 
    isLoaded: locationIsLoaded
  } = useLocation(canRequest);

  const location = useMemo(() => {
    return useMyLocation ? userLocation : { city, country }
  }, [useMyLocation, userLocation, city, country]);

  //getting usertemperature into state
  const { 
    temperature: userTemperature, 
    error: temperatureError,
    isLoaded: temperatureIsLoaded 
  } = useWeather(location, canRequest);

  const {
    songs: userSongs, 
    isLoaded: songsIsLoaded 
  } = useSongByGenre(getGenre(userTemperature), temperatureIsLoaded, canRequest);


  //set user data state - maybe do it in another component
  useEffect(() => {
    if(locationIsLoaded && songsIsLoaded && temperatureIsLoaded) {
      setUserData({
        temperature: userTemperature,
        location: location,
        songs: userSongs,
        isLoaded: true, 
      });
    }
  }, [locationIsLoaded, songsIsLoaded, temperatureIsLoaded, userLocation, userTemperature, userSongs, useMyLocation, city, country, location])


  return <UserDataContext.Provider value={userData}>
          {children}
        </UserDataContext.Provider>
}

export const useUserData = () => useContext(UserDataContext);