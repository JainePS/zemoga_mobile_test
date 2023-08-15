import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Comment} from '../../types/Comment';

import IconAndNumber from '../molecules/IconAndNumber';
import PostComment from '../molecules/PostComment';

const styles = StyleSheet.create({
  container: {
    marginBottom: 26,
  },
  text: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  number: {
    marginLeft: 10,
    fontSize: 23,
    color: '#EE4E34',
  },
  commentContainer: {
    height: 'auto',
    flexDirection: 'column',
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 20,
  },
});

type Props = {
  comments?: Comment[];
  backgroundColor?: string;
};

const PostComments = ({comments = [], backgroundColor = '#EE4E34'}: Props) => {
  return (
    <View style={styles.commentContainer}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor,
          borderRadius: 20,
        }}>
        {comments.map(c => (
          <PostComment key={c.id} comment={c} />
        ))}
      </View>
    </View>
  );
};

export default PostComments;
