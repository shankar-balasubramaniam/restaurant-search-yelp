import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import React from 'react';

const SearchBar = ({ searchTerm, onSearchTermChange, onSubmitSearchTerm }) => {
  return (
    <View style={styles.searchBarContainer}>
      <Feather name='search' style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder='Search'
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={onSubmitSearchTerm}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginTop: 15,
    padding: 2,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
});
