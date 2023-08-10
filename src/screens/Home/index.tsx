import React, {useEffect, useState} from 'react';
import FeedTemplate from '../../components/templates/FeedTemplate';
import usePosts from '../../hooks/usePosts';

const Home = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const {getPosts} = usePosts();

  useEffect(() => {
    const fetchPosts = async () => {
      const newPosts = await getPosts();
      console.log('carnsal', newPosts);
      setPosts(newPosts as any);
    };

    fetchPosts();
  }, []);

  return <FeedTemplate posts={posts} />;
};

export default Home;
