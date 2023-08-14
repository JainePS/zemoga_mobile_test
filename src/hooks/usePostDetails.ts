import {useEffect, useState} from 'react';
import {Comment} from '../types/Comment';
import {Post} from '../types/Post';
import {User} from '../types/User';
import usePosts from './usePosts';
import useUsers from './useUsers';

const usePostDetails = (postId: number) => {
  const [post, setPost] = useState<Post>();
  const [user, setUser] = useState<User>();
  const [comments, setComments] = useState<Comment[]>();

  const {getPostById, getPostComments, onDeletePost, onFavoritePost} =
    usePosts();
  const {getUserById} = useUsers();

  useEffect(() => {
    const fetchPostDetailsData = async () => {
      const [dbPost, postComments] = await Promise.allSettled([
        getPostById(postId),
        getPostComments(postId),
      ]);

      if (dbPost.status === 'fulfilled') {
        setPost(dbPost.value);

        if (dbPost.value) {
          const {userId} = dbPost.value;
          const postUser = await getUserById(userId);
          setUser(postUser);
        }
      }

      if (postComments.status === 'fulfilled') {
        setComments(postComments.value);
      }
    };

    fetchPostDetailsData();
  }, []);

  return {
    post,
    user,
    comments,
    onDeletePost,
    onFavoritePost,
  };
};

export default usePostDetails;
