import Main from './components/Main';
import Favorites from './routes/FavoritesPage';
import NavBar from './components/NavBar';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

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
  return (
    <Router>

      <NavBar />

      <Switch>
        <Route exact path={routes.main.path}>
          <Main />
        </Route>        
        <Route path={routes.favorites.path}>
          <Favorites />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
