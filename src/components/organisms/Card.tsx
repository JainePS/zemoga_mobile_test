import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../../layouts/cardStyles';
import {Post} from '../../types/Post';

type Props = {
  post: Post;
};

const Card = ({post}: Props) => {
  return (
    <TouchableOpacity style={styles.mainCardView}>
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
