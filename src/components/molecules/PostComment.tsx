import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Comment} from '../../types/Comment';

type Props = {
  comment: Comment;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
  },
});

const PostComment = ({comment}: Props) => {
  return (
    <View>
      <Text>Comment owner: {comment.name}</Text>
      <Text style={styles.container}>{comment.body}</Text>
    </View>
  );
};

export default PostComment;
