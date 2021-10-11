import React from 'react';
import { BrowserRouter as Router, Link as RouteLink } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button
} from "@chakra-ui/react"

export default function NavBar() {
  return (

      <Menu>
      <MenuButton as={Button} colorScheme="blackAlpha">
        Go to
      </MenuButton>
      <MenuList>    
        <RouteLink to='/'>
          <MenuItem>Main</MenuItem>
        </RouteLink>                         
      <MenuDivider />  
        <RouteLink to='/favorites'>
          <MenuItem>Favorites</MenuItem> 
        </RouteLink>                   
      </MenuList>
      </Menu>

    
  );
}
