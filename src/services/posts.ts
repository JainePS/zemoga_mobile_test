const URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchPosts = async () => {
  return await fetch(URL, {
    method: 'GET',
  });
};

export {fetchPosts};
