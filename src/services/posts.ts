import {getData, storeData} from '../libs/storage/client';
import {StorageKeys} from '../libs/storage/keys';
import {Post} from '../types/Post';

const URL = 'https://jsonplaceholder.typicode.com/posts';

/** Helper function to filter "Deleted" posts */
const filterDeletedPosts = async (posts: Post[] = []) => {
  const deletedPosts: number[] = (await getData(StorageKeys.Deleted)) || [];

  return posts.filter(({id}) => {
    const isDeleted = deletedPosts.includes(id);
    return !isDeleted;
  });
};

const fetchPosts = async (): Promise<Post[]> => {
  try {
    const resp = await fetch(URL, {
      method: 'GET',
    });

    if (!resp.ok) {
      throw new Error('Error on fetchPost');
    }

    const posts = await resp.json();
    /** Save posts in cache */
    await storeData(StorageKeys.PostsInCache, posts);

    return filterDeletedPosts(posts);
  } catch (error) {
    console.error('Error on fetchPost: Returning cache data');
    /** Cover the case where the user doesn't have internet connection :) */
    return (await getData(StorageKeys.PostsInCache)) || [];
  }
};

const fetchPostById = async (postId: number) => {
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

/** API is just a mock, using local storage to simulate deletion */
const deletePost = async (postId: number) => {
  // return fetch(`${URL}/${postId}`, {
  //   method: 'DELETE',
  // });

  /** Add deleted post id in the deleted array */
  const deletedPosts = (await getData(StorageKeys.Deleted)) || [];
  deletedPosts.push(postId);
  await storeData(StorageKeys.Deleted, deletedPosts);

  /** Delete post on cache */
  const postsInCache = (await getData(StorageKeys.PostsInCache)) || [];
  const cacheWitoutPost = postsInCache.filter((p: Post) => p.id !== postId);
  await storeData(StorageKeys.PostsInCache, cacheWitoutPost);

  return true;
};
export {
  fetchPosts,
  fetchPostByUser,
  fetchPostById,
  fetchPostComments,
  deletePost,
};
