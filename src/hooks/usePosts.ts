import {
  deletePost,
  fetchPostById,
  fetchPostByUser,
  fetchPostComments,
  fetchPosts,
} from '../services/posts';
import {Comment} from '../types/Comment';
import {Post} from '../types/Post';
//TODO: handle errors
const usePosts = () => {
  const getPosts = async (): Promise<Post[]> => {
    try {
      const posts = await fetchPosts();
      const postsJson = await posts.json();
      return postsJson as Post[];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const getPostById = async (postId: number) => {
    try {
      const posts = await fetchPostById(postId);
      const postsJson = await posts.json();
      return postsJson as Post;
    } catch (error) {
      console.log(error);
    }
  };

  const getPostByUser = async (userId: number) => {
    try {
      const posts = await fetchPostByUser(userId);
      const postsJson = await posts.json();
      return postsJson as Post[];
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  };

  const deletePostByPostId = async (userId: number) => {
    try {
      const response = await deletePost(userId);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getPosts,
    getPostByUser,
    getPostById,
    getPostComments,
    deletePostByPostId,
  };
};

export default usePosts;
