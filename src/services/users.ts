import {User} from '../types/User';

const URL = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = async () => {
  return fetch(URL, {
    method: 'GET',
  });
};

const findUserById = (users: User[], userId: number | undefined) => {
  return users.find(user => user.id === userId);
};

const fetchUserById = async (id: number) => {
  const usersResponse = await fetchUsers();

  if (!usersResponse.ok) {
    console.error('Error on users fetching');
    return;
  }

  const users = await usersResponse.json();
  
  console.log('user1', users);
  return findUserById(users, id);
};

export {fetchUsers, fetchUserById};
