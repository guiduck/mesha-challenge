import { useState, useEffect } from 'react';
import axios from 'axios';

const useSongByGenre = (genre, canRequest) => {

  const [songs, setSongs] = useState();
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
      params: {q: genre},
      headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '0b8b88299dmsh633d177b4830bb2p1f4e62jsn9a410c7e91fc'
      }
    };
    
    const loadData = async () => {
      try{
        const response = await axios.request(options)
        if (!response.data) {
          setError('could not get songs from api')
        } else {
          return response.data.data;
        }
      } catch(err) {
        setError(err.message)
      }
      
    }
    if (canRequest) {
      (async () => {
        const data = await loadData();
        if(data) {
          setSongs(data);
          setIsLoaded(true);
        }
      })()
    }
  }, [canRequest, genre]);

  return { songs, error, isLoaded };
}

export default useSongByGenre;