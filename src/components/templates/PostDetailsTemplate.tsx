import React from 'react';
import {Text, View} from 'react-native';
import {Post} from '../../types/Post';
import {User} from '../../types/User';
import {Comment} from '../../types/Comment';

import styles from '../../layouts/postDetailsStyles';
import PostHeader from '../organisms/PostHeader';
import UserInfo from '../molecules/UserInfo';
import PostComments from '../organisms/Comment';
// import {favoritePosts} from '../../utils/favorites';

type Props = {
  post?: Post;
  user?: User;
  comments?: Comment[];
  onDelete?: (id: number) => Promise<void>;
  onFavoritePost?: (postId: number) => Promise<void>;
};

const PostDetailsTemplate = ({
  post,
  user,
  comments,
  onDelete,
  onFavoritePost,
}: Props) => {
  if (!post) {
    return <Text>Post not found</Text>;
  }

  return (
    <View style={styles.postContainer}>
      <PostHeader post={post} onDelete={onDelete} onFavorite={onFavoritePost} />
      <Text style={styles.postText}>{post?.body}</Text>
      <UserInfo user={user} />
      <PostComments comments={comments} />
    </View>
  );
};

export default PostDetailsTemplate;
