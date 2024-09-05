import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CardProps } from '../types';
import { AntDesign } from '@expo/vector-icons';

const Card: React.FC<CardProps> = ({ user, post }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: user.photoUrl }} style={styles.avatar} />
        <Text style={styles.username}>{user.name}</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <Text>{post.text}</Text>
        <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleLike}>
          <AntDesign
            name={liked ? 'heart' : 'hearto'}
            size={24}
            color={liked ? 'red' : 'black'}
          />
        </TouchableOpacity>
        <Text style={styles.likesCount}>{likesCount} curtidas</Text>
        <AntDesign name="message1" size={24} color="black" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  body: {
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  likesCount: {
    marginLeft: 10,
  },
});

export default Card;
