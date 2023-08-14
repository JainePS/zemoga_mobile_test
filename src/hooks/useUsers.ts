import {fetchUsers} from '../services/users';
import {User} from '../types/User';

const useUsers = () => {
  const getUsers = async () => {
    try {
      const posts = await fetchUsers();
      const postsJson = await posts.json();
      return postsJson as User[];
    } catch (error) {
      console.log(error);
    }
  };

  return {getUsers};
};

export default useUsers;
