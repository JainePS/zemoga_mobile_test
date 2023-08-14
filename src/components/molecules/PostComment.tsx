import React from 'react';
import {StyleSheet, Text} from 'react-native';
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
  return <Text style={styles.container}>{comment.body}</Text>;
};

export default PostComment;
