# mesha-challenge

### Overview

This is an applications that searches for musics using Deezer api based on user input location or user real time location if he chooses and returns a list of songs by the weather. The music genre which is passed down the api changes depending on the temperature returned by the open weather api. Be careful with the hook calls as the api limits its number of requests to 500/month. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tech Stack
### Devlopment
* UI: [React](https://reactjs.org/)
* State Control: [Context](https://pt-br.reactjs.org/docs/context.html) for global state e [React Hooks](https://reactjs.org/docs/hooks-intro.html) for local state
* Styling: [Chakra-ui](https://chakra-ui.com) 
* HTTP Client: [Axios](https://github.com/axios/axios)
* Icons: [Chakra-ui](https://chakra-ui.com/docs/media-and-icons/icon)

### API
* [OpenWeather](https://openweathermap.org)
* [Deezer](https://developers.deezer.com/login?redirect=/api)
* [ipAddressFind](https://ipworld.info/iplocator)

### Linter
* [Prettier](https://github.com/prettier/prettier)

## Usage

Install dependencies:

```sh
yarn (or npm i)
```

Done! Start the service:

```sh
yarn start
```

## Project Structure

* `src/` code base;
* `src/hooks` config and custom hook for data fetch;
* `src/components` components isolated with its styling (if any);
* `src/routes/` contain pages used, in this case, just FavoriteSongs page;

## Comandos

```sh
# run the app
yarn start

# build static assets
yarn build 
```
## Screenshots
![MenuDark](https://github.com/guiduck/mesha-challenge/blob/main/public/images/MenuDark.jpeg)
![MainPageDark](https://github.com/guiduck/mesha-challenge/blob/main/public/images/MainPageDark.jpeg)
![MainPageLight](https://github.com/guiduck/mesha-challenge/blob/main/public/images/MainPageLight.jpeg)
![FavoritesPageDark](https://github.com/guiduck/mesha-challenge/blob/main/public/images/FavoritesPageDark.jpeg)
![FavoritesPageLight](https://github.com/guiduck/mesha-challenge/blob/main/public/images/FavoritesPageLight.jpeg)
![LightSearchByUserLocation](https://github.com/guiduck/mesha-challenge/blob/main/public/images/LightSearchByUserLocation.jpeg)
