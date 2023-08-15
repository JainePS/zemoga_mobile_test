import * as React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import styles from '../../styles/feedStyles';
import {Post} from '../../types/Post';
import Card from '../organisms/Card';

type Props = {
  posts: Post[];
  onPostSelect?: (postID: number) => void;
};

const FeedTemplate = ({posts, onPostSelect}: Props) => {
  if (posts.length === 0) {
    return <Text>Post not found</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({item}) => <Card post={item} onPostTap={onPostSelect} />}
        keyExtractor={post => `${post.id}`}
        extraData={posts}
      />
    </SafeAreaView>
  );
};

export default FeedTemplate;
