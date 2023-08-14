export const favoritePosts = (postId: number) => {
  let favorites = [0];
  favorites.forEach(favoritePostId => {
    favoritePostId === postId ? favorites.slice(1) : favorites.push(postId);
  });

  return favorites;
};
