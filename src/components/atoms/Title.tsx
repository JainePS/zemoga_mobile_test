import React from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    textTransform: 'capitalize',
    maxWidth: 250,
    color: '#EE4E34',
  },
});

type Props = {
  title?: string;
};

const Title = ({title}: Props) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;
