import { useState, useEffect } from 'react';

import axios from 'axios'

const useWeather = (location, canRequest) => {
  const [loading, setLoading] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState();

  // const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

  useEffect(() => {
    
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: `${location.city}, ${location.country}`,
        id: '2172797',
        lang: 'null',
        //here to get celsius
        units: 'metric',
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '0b8b88299dmsh633d177b4830bb2p1f4e62jsn9a410c7e91fc'
      }
    };
    
    const loadData = async () => {
      try{
          setLoading(true);
          const response = await axios.request(options);
          if (!response.data) {
            setError('could not get weather from api');
          } else {
            return response.data;
          }
          setLoading(false);  
      } catch(err) {
        setLoading(false);
        setError(err.message);
      }
    }

    if (canRequest && location.city !== '' && location.country !== '') {
      (async () => {
        const data = await loadData();
        if (data?.main?.temp) {
          setTemperature(data.main.temp);
          setIsLoaded(true);
        }
      })()
    }
  }, [location, canRequest]);

  return { temperature, error, isLoaded }
}

export default useWeather;