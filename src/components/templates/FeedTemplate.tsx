import * as React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Post} from '../../types/Post';
import Card from '../organisms/Card';

type Props = {
  posts: Post[];
};

const FeedTemplate = ({posts}: Props) => {
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({item}) => <Card post={item} />}
        keyExtractor={post => `${post.id}`}
      />
    </SafeAreaView>
  );
};

export default FeedTemplate;
