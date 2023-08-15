import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import PostDetailsTemplate from '../../components/templates/PostDetailsTemplate';
import usePostDetails from '../../hooks/usePostDetails';
import Loading from '../../components/organisms/Loading';

type Props = {
  route: any; // RouteProp<RootStackParams, Routes.PostDetails>;
};

const styles = StyleSheet.create({
  container: {height: '100%'},
});

const PostDetails = ({route}: Props) => {
  const postId = route.params;

  const {
    post,
    user,
    comments,
    onDeletePost,
    onFavorite,
    onUnfavorite,
    loading,
  } = usePostDetails(postId);

  return (
    <SafeAreaView style={styles.container}>
      <PostDetailsTemplate
        post={post}
        user={user}
        comments={comments}
        onDelete={onDeletePost}
        onFavoritePost={onFavorite}
        onUnfavorite={onUnfavorite}
        isLoading={loading}
      />
    </SafeAreaView>
  );
};

export default PostDetails;
