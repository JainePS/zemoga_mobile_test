import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Comment} from '../../types/Comment';

type Props = {
  comment: Comment;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    color: '#FCEDDA',
  },
  text: {
    fontSize: 15,
    color: 'white',
    textTransform: 'capitalize',
    marginBottom: 10,
  },
});

const PostComment = ({comment}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{comment.body}</Text>
      <Text style={styles.text}>Name: {comment.name}</Text>
    </View>
  );
};

export default PostComment;
