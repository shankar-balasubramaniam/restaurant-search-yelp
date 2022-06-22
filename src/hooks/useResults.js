import { useEffect, useState } from 'react';

import yelp from '../api/yelp';

export default () => {
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchBusinesses('pasta');
  }, []);

  const searchBusinesses = async (term) => {
    console.log('Search initiated');
    try {
      const response = await yelp.get('/search', {
        params: {
          term,
          location: 'greensborough',
          limit: 50,
        },
      });

      const results = response.data.businesses;

      setSearchResults(results);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  return [searchResults, errorMessage, searchBusinesses];
};
