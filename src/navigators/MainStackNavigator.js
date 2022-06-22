import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ResultDetailsScreen from '../screens/ResultDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen
          name='Search'
          component={SearchScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='ResultDetails'
          component={ResultDetailsScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
