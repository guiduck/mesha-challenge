import React, { useState } from 'react'
import useLocation from '../../hooks/useLocation'
import useWeather from '../../hooks/useWeather'
import useSongByGenre from '../../hooks/useSongByGenre'

import { Container } from './styles'

export default function Main() {

  const { location, locationError } = useLocation();

  const url = 'https://community-open-weather-map.p.rapidapi.com/weather';

  const { temperature, temperatureError } = useWeather( url, location);

  const songs = useSongByGenre('POP');

  console.log(temperature)

  console.log(location)
  return (
    <Container>
      hallo world

      {
        location ? JSON.stringify(location) : 'location is not available'
      }
    </Container>
  )
}
