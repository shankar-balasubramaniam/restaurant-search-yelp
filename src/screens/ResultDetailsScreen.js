import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import yelp from '../api/yelp';

const ResultDetailsScreen = ({ route }) => {
  const [businessDetails, setBusinessDetails] = useState(null);

  const { id } = route.params;

  useEffect(() => {
    getBusinessDetails(id);
  }, []);

  const getBusinessDetails = async (id) => {
    const response = await yelp.get(`${id}`);
    setBusinessDetails(response.data);
  };

  if (!businessDetails) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>{businessDetails.name}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={businessDetails.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

export default ResultDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    marginBottom: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
});
