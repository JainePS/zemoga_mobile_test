import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Post} from '../../types/Post';
import Title from '../atoms/Title';

type Props = {
  post?: Post;
  onDelete?: (id: number) => void;
  onFavorite?: (id: number) => void;
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const PostHeader = ({post, onDelete, onFavorite}: Props) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onFavorite(post?.id)}>
        <Text>Favorite</Text>
      </TouchableOpacity>
      <Title title={post?.title} />
      <TouchableOpacity onPress={() => onDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostHeader;
