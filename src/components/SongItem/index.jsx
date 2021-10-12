import React, { useState } from 'react';
import { Button, Flex, Container, Spacer } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

//forceUpdate hook
function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

export default function SongItem({
  artistName, 
  thumbnail, 
  songName,
  id,
  date
}) {

  const forceUpdate = useForceUpdate();

  const songIsFavorited = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    return favorites?.find(song => song.id === id);
  }

  const handleClickItem = () => {

    //testing getting date
  
    const currentDate = new Date().toLocaleString() + "";

    console.log(currentDate);

    const favorites = JSON.parse(localStorage.getItem('favorites'));

    //check if song is favorited to decide either to add or delete
    if (songIsFavorited()) {
      // remove item
      const newFavorites = favorites.filter(song => song.id !== id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
      // add item
      if (!favorites) {
        localStorage.setItem('favorites', JSON.stringify([{ artistName, thumbnail, songName, id, currentDate }]));
      } else {
        //if there is already a fav, just add new song data
        localStorage.setItem('favorites', JSON.stringify([...favorites, { artistName, thumbnail, songName, id, currentDate }]));
      }
    }
    forceUpdate();
  }
  
  return (
    <Container mt={5}>
      <Flex  direction='row' w='390px' h='100px' alignItems='center' justify='space-between'>
       
        {/* <Thumbnail src={thumbnail} /> */}
        
        <Flex borderRadius='full' style={{backgroundImage: `url(${thumbnail})`, backgroundSize:'cover', minHeight: '75px', minWidth: '75px'}} />
        
        <Flex ml={5} mr={5} direction='row'>
          <Flex direction='column'>
            <strong>{artistName}</strong>
            <Spacer />
            <span>{songName}</span>
            <Spacer />
          </Flex>
          <Flex direction='column'>
            {date && 
              <Flex alignSelf='flex-end' >
                <span>{date}</span>
              </Flex>
            }
            <Button onClick={handleClickItem} colorScheme={songIsFavorited() ? 'red' : 'green'} variant='outline'>
              {!songIsFavorited() ? `Adicionar aos favoritos` : `Remover dos favoritos`}
            </Button>   
          </Flex>          
        </Flex>       
      </Flex>    
    
    </Container>      
  )
}
