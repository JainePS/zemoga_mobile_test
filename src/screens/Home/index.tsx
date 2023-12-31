import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import FeedTemplate from '../../components/templates/FeedTemplate';
import usePosts from '../../hooks/usePosts';
import {RootStackParams, Routes} from '../../routes/RootStackParams';
import {Post} from '../../types/Post';

type Props = {
  route: any; // RouteProp<RootStackParams, Routes.Home>;
};

const Home = ({route}: Props) => {
  const shouldRefresh = route.params;

  const [posts, setPosts] = useState<Post[]>([]);
  const {getPosts} = usePosts();

  const navigate = useNavigation<RootStackParams>();

  useEffect(() => {
    const fetchPosts = async () => {
      const newPosts = await getPosts();
      setPosts(newPosts);
    };

    fetchPosts();
  }, [shouldRefresh]);

  const handleSelectPost = (postID: number) => {
    navigate.navigate(Routes.PostDetails, postID);
  };

  return <FeedTemplate posts={posts} onPostSelect={handleSelectPost} />;
};

export default Home;
