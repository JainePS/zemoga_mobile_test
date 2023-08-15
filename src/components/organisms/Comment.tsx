import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import { Comment } from '../../types/Comment';

import IconAndNumber from '../molecules/IconAndNumber';
import PostComment from '../molecules/PostComment';

const styles = StyleSheet.create({
  container: {
    marginBottom: 26,
  },
  text: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  number: {
    marginLeft: 10,
    fontSize: 23,
    color: '#EE4E34',
  },
  commentContainer: {
    height: 'auto',
    flexDirection: 'column',
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 20,
  },
});

type Props = {
  comments?: Comment[];
};

const PostComments = ({comments}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const commentsCount = useCallback(() => {
    return (comments ?? []).length;
  }, [comments]);

  return (
    <View style={styles.commentContainer}>
      <IconAndNumber count={commentsCount} setIsOpen={setIsOpen} />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: isOpen ? '#EE4E34' : 'transparent',
          borderRadius: 20,
        }}>
        {isOpen && (
          <FlatList
            data={comments}
            renderItem={({item}) => <PostComment comment={item} />}
            keyExtractor={comment => `${comment.id}`}
          />
        )}
      </View>
    </View>
  );
};

export default PostComments;
