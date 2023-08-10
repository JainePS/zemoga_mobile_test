import {apiGet} from '../../apis/apiUtils';
import {Post} from '../../types/Post';

const usePosts = () => {
  const getPosts = async (url: string) => {
    try {
      return (await apiGet(url)) as Post[];
    } catch (error) {
      throw new Error('Something went wrong');
    }
  };

  return {getPosts};
};

export default usePosts;
