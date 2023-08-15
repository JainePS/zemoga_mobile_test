import React, {useCallback, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Post} from '../../types/Post';
import {User} from '../../types/User';
import {Comment} from '../../types/Comment';

import styles from '../../styles/postDetailsStyles';
import PostHeader from '../organisms/PostHeader';
import UserInfo from '../molecules/UserInfo';
import PostComments from '../organisms/Comment';
import Loading from '../organisms/Loading';
import IconAndNumber from '../molecules/IconAndNumber';

type Props = {
  post?: Post;
  user?: User;
  comments?: Comment[];
  onDelete?: (id: number) => Promise<void>;
  onFavoritePost?: (postId: number) => Promise<void>;
  onUnfavorite?: (postId: number) => Promise<void>;
  isLoading?: boolean;
};

const PostDetailsTemplate = ({
  post,
  user,
  comments,
  isLoading,
  onDelete,
  onFavoritePost,
  onUnfavorite,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const commentsCount = useCallback(() => {
    return (comments ?? []).length;
  }, [comments]);

  if (!post && !isLoading) {
    return <Text>Post not found</Text>;
  }

  if (!post && isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  return (
    <ScrollView>
      <View style={styles.postContainer}>
        <PostHeader
          post={post}
          onDelete={onDelete}
          onFavorite={onFavoritePost}
          onUnfavorite={onUnfavorite}
        />
        <Text style={styles.postText}>{post?.body}</Text>
        <UserInfo user={user} />
        <IconAndNumber count={commentsCount} setIsOpen={setIsOpen} />
        {isOpen && <PostComments comments={comments} />}
      </View>
    </ScrollView>
  );
};

export default PostDetailsTemplate;
