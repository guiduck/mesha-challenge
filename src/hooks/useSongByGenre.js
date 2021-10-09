import { useState, useEffect } from 'react';
import axios from 'axios';

const useSongByGenre = (genre) => {

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://shazam-core.p.rapidapi.com/v1/charts/genre-world',
      params: {genre_code: genre, limit: '10'},
      headers: {
        'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
        'x-rapidapi-key': '0b8b88299dmsh633d177b4830bb2p1f4e62jsn9a410c7e91fc'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

}

export default useSongByGenre;