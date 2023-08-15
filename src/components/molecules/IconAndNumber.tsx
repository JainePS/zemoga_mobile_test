import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import CommentIcon from '../icons/CommentIcon';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  number: {
    marginLeft: 10,
    fontSize: 15,
    color: '#EE4E34',
  },
});

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  count: () => number;
};

const IconAndNumber = ({setIsOpen, count}: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setIsOpen(prev => !prev)}>
          <CommentIcon />
        </TouchableOpacity>
        <Text style={styles.number}>{count()}</Text>
      </View>
    </View>
  );
};

export default IconAndNumber;
