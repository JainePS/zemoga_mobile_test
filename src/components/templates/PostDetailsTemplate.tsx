import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Post} from '../../types/Post';
import {User} from '../../types/User';
import {Comment} from '../../types/Comment';

import styles from '../../layouts/postDetailsStyles';
import PostHeader from '../organisms/PostHeader';
import UserInfo from '../molecules/UserInfo';
import PostComments from '../organisms/Comment';

type Props = {
  post?: Post;
  user?: User;
  comments?: Comment[];
  onDelete?: (id: number) => void;
};

const PostDetailsTemplate = ({post, user, comments, onDelete}: Props) => {
  console.log(user);

  return (
    <SafeAreaView style={styles.postContainer}>
      <PostHeader post={post} onDelete={onDelete} />
      <Text style={styles.postText}>{post?.body}</Text>
      <UserInfo user={user} />
      <PostComments comments={comments} />
    </SafeAreaView>
  );
};

export default PostDetailsTemplate;
