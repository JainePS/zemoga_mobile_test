import React, {useCallback, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Comment} from '../../types/Comment';
import PostComment from '../molecules/PostComment';

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    flexDirection: 'row',
  },
  number: {
    marginLeft: 2,
  },
  commentContainer: {
    flexDirection: 'column',
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
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.commentContainer}>
        <View style={styles.text}>
          <TouchableOpacity onPress={() => setIsOpen(prev => !prev)}>
            <Text>Comments</Text>
          </TouchableOpacity>
          <Text style={styles.number}>{commentsCount()}</Text>
        </View>
        {isOpen && (
          <FlatList
            data={comments}
            renderItem={({item}) => <PostComment comment={item} />}
            keyExtractor={comment => `${comment.id}`}
          />
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default PostComments;
