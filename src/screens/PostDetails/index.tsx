import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import PostDetailsTemplate from '../../components/templates/PostDetailsTemplate';
import usePosts from '../../hooks/usePosts';
import useUsers from '../../hooks/useUsers';
import {deletePost} from '../../services/posts';
import {Comment} from '../../types/Comment';
import {Post} from '../../types/Post';
import {User} from '../../types/User';
import {findUserById} from '../../utils/findUserById';

type Props = {
  route: any; // RouteProp<RootStackParams, Routes.PostDetails>;
};

const PostDetails = ({route}: Props) => {
  const postId = route.params;

  const [post, setPost] = useState<Post>();
  const [users, setUsers] = useState<User[]>();
  const [user, setUser] = useState<User>();
  const [comments, setComments] = useState<Comment[]>();

  const {getPostById, getPostComments} = usePosts();
  const {getUsers} = useUsers();

  useEffect(() => {
    const fetchPostById = async (id: number) => {
      const newPost = await getPostById(id);
      setPost(newPost);
    };

    const fetchUsers = async () => {
      const newUsers = await getUsers();
      setUsers(newUsers);
    };

    const fetchPostComments = async (id: number) => {
      const newComment = await getPostComments(id);
      setComments(newComment);
    };

    fetchPostComments(postId);
    fetchUsers();
    fetchPostById(postId);

    if (users) {
      const newUser = findUserById(users, post?.userId);
      setUser(newUser);
    }
  }, []);

  const onDeletePost = async (id: number) => {
    await deletePost(id);
  };

  return (
    <SafeAreaView style={{height: '100%'}}>
      <PostDetailsTemplate
        post={post}
        user={user}
        comments={comments}
        onDelete={onDeletePost}
      />
    </SafeAreaView>
  );
};

export default PostDetails;
