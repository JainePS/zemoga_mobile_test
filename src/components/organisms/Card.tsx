import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../../layouts/cardStyles';
import {Post} from '../../types/Post';

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
      style={styles.mainCardView}
      onPress={() => onCardTap(post.id)}>
      <View key={post.id} style={{flexDirection: 'column'}}>
        <Text numberOfLines={2} style={styles.title}>
          {post.title}
        </Text>
        {/* <StarIcon /> */}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
