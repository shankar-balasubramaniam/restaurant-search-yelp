import { StyleSheet, Text, View } from 'react-native';

import MainStackNavigator from './src/navigators/MainStackNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return <MainStackNavigator />;
}
