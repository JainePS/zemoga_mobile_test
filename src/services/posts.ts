import {
  clearAll,
  getData,
  removeValue,
  storeData,
} from '../libs/storage/client';
import {StorageKeys} from '../libs/storage/keys';
import {Post} from '../types/Post';

const URL = 'https://jsonplaceholder.typicode.com/posts';

//**To clean up the cache data uncomment the line above */
//clearAll();

/** Helper function to filter "Deleted" posts */
const filterDeletedPosts = async (posts: Post[] = []) => {
  const deletedPosts: number[] = (await getData(StorageKeys.Deleted)) || [];

  return posts.filter(({id}) => {
    const isDeleted = deletedPosts.includes(id);
    return !isDeleted;
  });
};

const isFavorite = async (post: Post) => {
  const favoritedPosts: number[] = (await getData(StorageKeys.Favorites)) || [];
  return favoritedPosts.includes(post.id);
};

/** Helper function to mark "Favorited" posts */
const markFavoritedPosts = async (posts: Post[] = []) => {
  return await Promise.all(
    posts.map(async (post: Post) => {
      return {
        ...post,
        isFavorite: await isFavorite(post),
      };
    }),
  );
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

    const filteredPosts = await filterDeletedPosts(posts);
    const favoritedPosts = await markFavoritedPosts(filteredPosts);

    return favoritedPosts.sort(
      (a, b) => Number(b.isFavorite) - Number(a.isFavorite),
    );
  } catch (error) {
    console.error('Error on fetchPost: Returning cache data');
    /** Cover the case where the user doesn't have internet connection :) */
    return (await getData(StorageKeys.PostsInCache)) || [];
  }
};

const getPostFromTheCache = async (id: number) => {
  const posts = (await getData(StorageKeys.PostsInCache)) || [];
  const postSearch = posts.find((p: Post) => p.id === id);
  return postSearch[0];
};

const updateCachePost = async (post: Post) => {
  const posts = (await getData(StorageKeys.PostsInCache)) || [];
  return posts.map((p: Post) => {
    if (post.id === p.id) {
      return post;
    }

    return p;
  });
};

const fetchPostById = async (postId: number) => {
  try {
    const post = await fetch(`${URL}/${postId}`, {
      method: 'GET',
    });
    if (!post.ok) {
      throw new Error('Error on fetchPost');
    }
    const postJson = await post.json();
    const parsedPost = {
      ...postJson,
      isFavorite: await isFavorite(postJson),
    };

    await updateCachePost(parsedPost);

    return parsedPost;
  } catch (error) {
    console.error('Error on fetchPostById: Returning cache data');
    /** Cover the case where the user doesn't have internet connection :) */
    return getPostFromTheCache(postId);
  }
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
  const cacheWithoutPost = postsInCache.filter((p: Post) => p.id !== postId);
  await storeData(StorageKeys.PostsInCache, cacheWithoutPost);

  return true;
};

const unfavoritePost = async (postId: number) => {
  await removeValue(StorageKeys.Favorites[postId]);
  // /** Remove favorite key */
  const favoritedPosts = (await getData(StorageKeys.Favorites)) || [];
  const updatedFavoritedPosts = favoritedPosts.filter(
    (p: number) => p !== postId,
  );

  await storeData(StorageKeys.Favorites, updatedFavoritedPosts);
  const posts = (await getData(StorageKeys.PostsInCache)) || [];
  const updatedPosts = posts.map((p: Post) => {
    return {
      ...p,
      isFavorite: p.id === postId ? false : p.isFavorite,
    };
  });

  await storeData(StorageKeys.PostsInCache, updatedPosts);
  return true;
};

/** API is just a mock, using local storage to simulate to favorite */
const favoritePost = async (postId: number) => {
  /** Add favorited post id in the favorited array */
  const favoritedPosts = (await getData(StorageKeys.Favorites)) || [];
  favoritedPosts.push(postId);

  await storeData(StorageKeys.Favorites, favoritedPosts);

  /** To favorite post on cache */
  const postsInCache = (await getData(StorageKeys.PostsInCache)) || [];
  await markFavoritedPosts(postsInCache);

  return true;
};
export {
  fetchPosts,
  fetchPostByUser,
  fetchPostById,
  fetchPostComments,
  deletePost,
  favoritePost,
  unfavoritePost,
};
