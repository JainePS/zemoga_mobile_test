import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Post} from '../../types/Post';
import Title from '../atoms/Title';
import DeleteIcon from '../icons/DeleteIcon';
import StarIcon from '../icons/StarIcon';
import StarOutlinedIcon from '../icons/StarOutlinedIcon';

type Props = {
  post: Post;
  onDelete?: (id: number) => Promise<void>;
  onFavorite?: (id: number) => Promise<void>;
  onUnfavorite: (id: number) => Promise<void>;
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidht: 350,
    marginHorizontal: 15,
    marginTop: 10,
  },
});

const PostHeader = ({post, onDelete, onFavorite, onUnfavorite}: Props) => {
  const {id, isFavorite = false} = post;

  const onFavoritePress = async () => {
    if (isFavorite) {
      onUnfavorite && (await onUnfavorite(id));
      return;
    }
    onFavorite && (await onFavorite(id));
  };

  const onDeletePress = async () => {
    if (onDelete) {
      await onDelete(id).then(() => Alert.alert('Post successfully deleted!'));
    }
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onFavoritePress}>
        {isFavorite ? (
          <StarIcon width={30} height={30} />
        ) : (
          <StarOutlinedIcon width={30} height={30} />
        )}
      </TouchableOpacity>
      <Title title={post?.title} />
      {!post.isFavorite && (
        <TouchableOpacity onPress={onDeletePress}>
          <DeleteIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PostHeader;
