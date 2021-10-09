import { useState, useEffect } from 'react';
import axios from 'axios'

const useLocation = () => {

  const [error, setError] = useState('')
  const [location, setLocation] = useState({
    city:'', country:''
  });

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
      params: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
      headers: {
        'x-rapidapi-host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
        'x-rapidapi-key': '0b8b88299dmsh633d177b4830bb2p1f4e62jsn9a410c7e91fc'
      }
    };

   
    const loadData = async () => {
      try {
        const response = await axios.request(options)
        if(!response.data) {
         setError('could not get location rom api')
        } else {
          return response.data;
        }
      } catch(err) {
        console.error(error);
        setError(err.message);
      };
    }      

    (async ()=> {
      const data = await loadData();
      if(data)setLocation({
        city: data.city,
        country: data.country
      })
    })()
  }, [])

  return { location, error }
}

export default useLocation;