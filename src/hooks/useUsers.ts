import {fetchUserById, fetchUsers} from '../services/users';
import {User} from '../types/User';

const useUsers = () => {
  const getUsers = async () => {
    try {
      const users = await fetchUsers();
      const usersJson = await users.json();
      return usersJson as User[];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const getUserById = async (id: number) => {
    try {
      const user = await fetchUserById(id);
      return user;
    } catch (error) {
      console.error(error);
    }
  };

  return {getUsers, getUserById};
};

export default useUsers;
