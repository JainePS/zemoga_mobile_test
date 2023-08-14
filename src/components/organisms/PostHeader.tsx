import React from 'react';
import {Text, View} from 'react-native';

import {Post} from '../../types/Post';
import Title from '../atoms/Title';
import StarIcon from '../icons/StarIcon';

type Props = {
  post?: Post;
  onDelete?: (id: number) => void;
};

const PostHeader = ({post, onDelete}: Props) => {
  return (
    <View>
      <StarIcon />
      <Title title={post?.title} />
      <Text onPress={onDelete}>Delete</Text>
    </View>
  );
};

export default PostHeader;
