import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button, 
  Flex,
  Container,
  useColorModeValue
} from "@chakra-ui/react"

export default function NavBar() {

  const buttonTextColor = useColorModeValue("whiteAlpha.800", "gray.300");
  const buttonBackgroundColor = useColorModeValue('gray.700', 'whiteAlpha.200');

  return (
      <Container>
        <Flex alignItems='center' mt={10}>
          <Menu >
            <MenuButton bg={buttonBackgroundColor} color={buttonTextColor} as={Button} w='full' colorScheme="blackAlpha">
              Ir para...
            </MenuButton>
            <MenuList >    
              <RouteLink to='/'>
                <MenuItem >Início</MenuItem>
              </RouteLink>                         
              <MenuDivider />  
              <RouteLink to='/favorites'>
                <MenuItem >Favoritas</MenuItem> 
              </RouteLink>                   
            </MenuList>
          </Menu>
        </Flex>
      </Container>
  );
}
