import {
  deletePost,
  fetchPostById,
  fetchPostByUser,
  fetchPostComments,
  fetchPosts,
} from '../services/posts';
import {Comment} from '../types/Comment';
import {Post} from '../types/Post';
import {favoritePosts} from '../utils/favorites';
//TODO: handle errors
const usePosts = () => {
  const getPosts = async (): Promise<Post[]> => {
    try {
      const posts = await fetchPosts();
      return posts;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const getPostById = async (postId: number) => {
    try {
      const posts = await fetchPostById(postId);
      const postsJson = await posts.json();
      return postsJson as Post;
    } catch (error) {
      console.error(error);
    }
  };

  const getPostByUser = async (userId: number) => {
    try {
      const posts = await fetchPostByUser(userId);
      const postsJson = await posts.json();
      return postsJson as Post[];
    } catch (error) {
      console.error(error);
    }
  };

  const getPostComments = async (
    postId: number,
  ): Promise<Comment[] | undefined> => {
    try {
      const postComments = await fetchPostComments(postId);
      const postCommentsJson = await postComments.json();
      return postCommentsJson;
    } catch (error) {
      console.error(error);
    }
  };

  const deletePostByPostId = async (postId: number) => {
    try {
      const response = await deletePost(postId);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const onDeletePost = async (id: number) => {
    const response = await deletePost(id);
    console.log('borranooo', response);
  };

  const onFavoritePost = (postId: number) => {
    favoritePosts(postId);
  };

  return {
    getPosts,
    getPostByUser,
    getPostById,
    getPostComments,
    deletePostByPostId,
    onDeletePost,
    onFavoritePost,
  };
};

export default usePosts;
