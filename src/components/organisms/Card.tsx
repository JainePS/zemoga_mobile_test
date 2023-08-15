import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../../layouts/cardStyles';
import {Post} from '../../types/Post';
import StarIcon from '../icons/StarIcon';

type Props = {
  post: Post;
  onPostTap?: (postID: number) => void;
};

const Card = ({post, onPostTap}: Props) => {
  const onCardTap = (postID: number) => {
    if (!onPostTap) {
      return;
    }
    onPostTap(postID);
  };

  return (
    <TouchableOpacity
      style={styles.mainCardContainer}
      onPress={() => onCardTap(post.id)}>
      <View key={post.id} style={styles.contentContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {post.title}
        </Text>
        <View style={styles.icon}>{post.isFavorite && <StarIcon />}</View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
