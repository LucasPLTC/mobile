import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Landing from "./src/pages/Landing";

export default function App() {
  return (
      <>
      <Landing />
      <StatusBar style="auto"/>
      </>
  );
}

// <View style={styles.container}>
//   <Text>Eae Leleco</Text>
//   <StatusBar style="auto" />
// </View>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#333',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
