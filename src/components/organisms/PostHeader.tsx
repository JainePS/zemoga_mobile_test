import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Post} from '../../types/Post';
import Title from '../atoms/Title';
import StarIcon from '../icons/StarIcon';

type Props = {
  post: Post;
  onDelete?: (id: number) => Promise<void>;
  onFavorite?: (id: number) => Promise<void>;
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const PostHeader = ({post, onDelete, onFavorite}: Props) => {
  const {id} = post;

  const onFavoritePress = async () => {
    onFavorite && (await onFavorite(id));
  };

  const onDeletePress = async () => {
    onDelete && (await onDelete(id));
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onFavoritePress}>
        <StarIcon />
      </TouchableOpacity>
      <Title title={post?.title} />
      <TouchableOpacity onPress={onDeletePress}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostHeader;
