import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Post_Big_Card = ({
  profile_image,
  username,
  post_pic,
  caption,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Image source={{ uri: profile_image }} style={styles.friendImage} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.caption}>{caption}</Text>
        </View>
      </View>
      <Image source={{ uri: post_pic }} style={styles.image} />
    </View>
  );
};

export default Post_Big_Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'transparent',
    marginVertical: 10,
    borderRadius: 10,
  },
  c1: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'transparent',
    borderColor: 'white',
  },
  friendImage: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: 'column',
  },
  username: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  caption: {
    color: 'white',
    fontSize: 15,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 15,
    marginVertical: 10,
  },
});
