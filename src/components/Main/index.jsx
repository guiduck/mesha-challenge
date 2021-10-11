import React, { useState } from 'react'
import { UserDataProvider } from '../../context/userDataProvider';
import { Button } from '@chakra-ui/button';
import { Container, Flex, Heading } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import AllSongsList from '../AllSongsList';
import FavoriteSongsList from '../FavoriteSongsList';

export default function Main() {

  const [useMyLocation, setUseMylocation] = useState(false);
  const [cityInput, setCityInput] = useState('');
  const [countryInput, setCountryInput] = useState('');

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const onClickUseMyLocation = () => {
    setUseMylocation(true);
  }

  const onClickUseCustomLocation = () => {
    setUseMylocation(false);
    setCity(cityInput);
    setCountry(countryInput)
  }

  return (
    <UserDataProvider useMyLocation={useMyLocation} city={city} country={country}>
      <Container centerContent mt={10}>
        <Flex width='full' gridGap='2'>
          <Input value={cityInput} onChange={(e) => setCityInput(e.target.value)} placeholder="Rio de Janeiro" />
          <Input value={countryInput} onChange={(e) => setCountryInput(e.target.value)} placeholder="Brazil" />
          <Button onClick={onClickUseCustomLocation} w='full'>Buscar</Button>
        </Flex>
        <Button my={4} w='full' onClick={onClickUseMyLocation}>Usar minha localização</Button>

        <Flex>
          <Heading as="h3" size="lg">
            Musicas por clima
          </Heading>
          <AllSongsList />          
          <FavoriteSongsList />
        </Flex>

      </Container>
    </UserDataProvider>

  );
}
