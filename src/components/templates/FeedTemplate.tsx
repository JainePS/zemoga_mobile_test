import * as React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Post} from '../../types/Post';
import Card from '../organisms/Card';

type Props = {
  posts: Post[];
  onPostSelect?: (postID: number) => void;
};

const FeedTemplate = ({posts, onPostSelect}: Props) => {
  return (
    <SafeAreaView
      style={{flexDirection: 'column', padding: 20, backgroundColor: 'white'}}>
      <FlatList
        data={posts}
        renderItem={({item}) => <Card post={item} onPostTap={onPostSelect} />}
        keyExtractor={post => `${post.id}`}
      />
    </SafeAreaView>
  );
};

export default FeedTemplate;
