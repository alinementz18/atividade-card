import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Feed from './src/screens/Feed';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Feed />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

