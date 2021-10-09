import { useState, useEffect } from 'react';
import axios from 'axios'

const useWeather = (url, location ) => {

  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState();

  // const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

  useEffect(() => {
    const options = {
      method: 'GET',
      url: url,
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
        const response = await axios.request(options)
        if (!response.data) {
          setError('could not get weather from api')
        } else {
          return response.data;
        }
      } catch(err) {
        setError(err.message)
      }
      
    }

    (async () => {
      const data = await loadData();
      setTemperature(data.main.temp);
      if(temperature) console.log(temperature)
    })()

    return () => console.log('clean up')
  }, [url])

  // setTemperature(fahrenheitToCelsius(data))

  return { temperature, error }
}

export default useWeather;