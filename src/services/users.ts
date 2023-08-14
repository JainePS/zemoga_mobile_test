const URL = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = async () => {
  return await fetch(URL, {
    method: 'GET',
  });
};

export {fetchUsers};