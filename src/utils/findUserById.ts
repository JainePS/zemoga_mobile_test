import {User} from '../types/User';

export const findUserById = (users: User[], userId: number | undefined) => {
  console.log(userId, 'userdid');

  return users.find(user => user.id === userId);
};
