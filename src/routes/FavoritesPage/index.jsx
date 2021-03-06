import { Flex, Heading, Container } from '@chakra-ui/layout';
import React, { useState } from 'react';

import FavoriteSongsList from '../../components/FavoriteSongsList';

export default function Favorites() {

  // //forceUpdate hook
  // function useForceUpdate(){
  //   const [value, setValue] = useState(0); // integer state
  //   return () => setValue(value => value + 1); // update the state to force render
  // }

  // useForceUpdate();

  return (
    <Container centerContent>
      <Flex direction='column' mt={8} alignItems='center'>
        <Heading as="h3" size="lg">
            Suas Favoritas
        </Heading>
        <Flex mt={10}>
          <FavoriteSongsList  />
        </Flex>
        
      </Flex>
    </Container> 
    
  )
}
