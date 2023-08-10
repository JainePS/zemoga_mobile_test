import {fetchPosts} from '../services/posts';
import {Post} from '../types/Post';

const usePosts = () => {
  const getPosts = async () => {
    try {
      const posts = await fetchPosts();
      const postsJson = await posts.json();
      return postsJson as any;
    } catch (error) {
      console.log(error);
    }
  };

  return {getPosts};
};

export default usePosts;
