/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import FeedTemplate from '../../components/templates/FeedTemplate';
import usePosts from '../../hooks/usePosts';
import {RootStackParams, Routes} from '../../routes/RootStackParams';
import {Post} from '../../types/Post';

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const {getPosts} = usePosts();

  const navigate = useNavigation<RootStackParams>();

  useEffect(() => {
    const fetchPosts = async () => {
      const newPosts = await getPosts();
      setPosts(newPosts.slice(0, 4));
    };

    fetchPosts();
  }, []);

  const handleSelectPost = (postID: number) => {
    navigate.navigate(Routes.PostDetails, postID);
  };

  return <FeedTemplate posts={posts} onPostSelect={handleSelectPost} />;
};

export default Home;
