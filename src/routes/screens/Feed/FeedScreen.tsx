import * as React from 'react';

import FeedTemplate from '../../../components/templates/FeedTemplate';
import usePosts from '../../../services/hooks/usePosts';

const FeedScreen = () => {
  const {getPosts} = usePosts();
  const posts = getPosts('/posts');
  console.log(posts, 'posts');

  return <FeedTemplate posts={posts} />;
};

export default FeedScreen;
