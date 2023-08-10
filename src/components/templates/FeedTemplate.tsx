import * as React from 'react';
import {Text, View} from 'react-native';
import {Post} from '../../types/Post';

type Props = {
  posts: Promise<Post[]>;
};

const FeedTemplate = (props: Props) => {
  const {posts} = props;
  console.log(posts);

  return (
    <View>
      <Text>Posts</Text>
    </View>
  );
};

export default FeedTemplate;
