import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Test } from "react-native-swipe-for-options";

export default function App() {
  return (
    <View style={styles.container}>
      <Test />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
