import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';

const Feed = () => {
  const data = [
    {
      user: { name: 'Aline Mentz', photoUrl: 'https://robohash.org/john' },
      post: { text: 'Bem-vindos!', imageUrl: 'https://picsum.photos/200' },
    },
    {
      user: { name: 'Lucas Correa', photoUrl: 'https://robohash.org/jane' },
      post: { text: 'Bem-vindos!', imageUrl: 'https://picsum.photos/200' },
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <Card key={index} user={item.user} post={item.post} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Feed;
