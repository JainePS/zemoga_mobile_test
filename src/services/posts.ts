const URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchPosts = async () => {
  return await fetch(URL, {
    method: 'GET',
  });
};

const fetchPostById = async (postId: number) => {
  console.log(postId, `${URL}/${postId}`);

  return await fetch(`${URL}/${postId}`, {
    method: 'GET',
  });
};

const fetchPostByUser = async (userId: number) => {
  return await fetch(`${URL}/${userId}`, {
    method: 'GET',
  });
};

const fetchPostComments = async (postId: number) => {
  return await fetch(`${URL}/${postId}/comments`, {
    method: 'GET',
  });
};

const deletePost = async (postId: number) => {
  return fetch(`${URL}/${postId}`, {
    method: 'DELETE',
  });
};
export {
  fetchPosts,
  fetchPostByUser,
  fetchPostById,
  fetchPostComments,
  deletePost,
};
