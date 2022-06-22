import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, errorMessage, searchBusinesses] = useResults();

  const filterResultsByPrice = (price) => {
    // price => '$' || '$$' || '$$$'
    return searchResults.filter((result) => result.price === price);
  };

  const onSearchTermChange = (newTerm) => {
    setSearchTerm(newTerm);
  };

  return (
    <View style={styles.background}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={onSearchTermChange}
        onSubmitSearchTerm={() => searchBusinesses(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title='Cost Effective'
        />
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Big Spender!'
        />
        <ResultsList
          results={filterResultsByPrice('$$$$')}
          title='Bank Breaker!!'
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
});
