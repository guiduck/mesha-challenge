import React from 'react'
import useGeoLocation from '../../hooks/useGeoLocation'


import { Container } from './styles'

export default function Main() {

  const location = useGeoLocation();

  return (
    <Container>
      hallo world

      {
        location.loaded ? JSON.stringify(location) : 'location is not available'
      }
    </Container>
  )
}
