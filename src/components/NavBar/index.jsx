import React from 'react';
import { BrowserRouter as Router, Link as RouteLink } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button, 
  Flex,
  Container
} from "@chakra-ui/react"

export default function NavBar() {
  return (
      <Container>
        <Flex alignItems='center' mt={10}>
        <Menu >
      <MenuButton as={Button} w='full' colorScheme="blackAlpha">
        Ir para...
      </MenuButton>
      <MenuList>    
        <RouteLink to='/'>
          <MenuItem>Início</MenuItem>
        </RouteLink>                         
      <MenuDivider />  
        <RouteLink to='/favorites'>
          <MenuItem>Favoritas</MenuItem> 
        </RouteLink>                   
      </MenuList>
      </Menu>

      </Flex>
      </Container>
      
      
    
  );
}
