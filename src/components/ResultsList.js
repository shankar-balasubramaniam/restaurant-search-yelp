import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, results }) => {
  if (!results.length) {
    return null;
  }
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ResultDetails', { id: item.id })
            }
          >
            <ResultDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 5,
  },
});
