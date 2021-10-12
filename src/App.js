import React from 'react';
import Main from './components/Main';
import Favorites from './routes/FavoritesPage';
import NavBar from './components/NavBar';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {MoonIcon, SunIcon} from '@chakra-ui/icons';

import  { useColorMode, useColorModeValue, Button, Container, Flex } from '@chakra-ui/react';

export const routes = {
  main: {
    path: '/',
    name: 'Main'
  },

  favorites: {
    path: '/favorites',
    name: 'favorites'
  },

  notFound: {
    path: '*',
    name: 'page not found'
  }
}

function App() {

  const { toggleColorMode } = useColorMode();
  const colorBackground = useColorModeValue('gray.100', 'gray.700'); 

  return (
    <Router>
      
      <Container p={10} mt={-10} background={colorBackground}>
        <Flex direction='column'>
          <Button onClick={toggleColorMode} width='30px' variant='tean' >
          <SunIcon /> / <MoonIcon />
          </Button>
          <NavBar />
          <Switch>
            <Route exact path={routes.main.path}>
              <Main />
            </Route>        
            <Route path={routes.favorites.path}>
              <Favorites />
            </Route>
          </Switch> 
        </Flex>            
      </Container>                 
    </Router>
  );
}

export default App;
