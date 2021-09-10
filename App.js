import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SquareValue from './components/SuareValue';
import BoxScreen from './screen/BoxScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <BoxScreen></BoxScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
