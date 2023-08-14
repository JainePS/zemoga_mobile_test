import React from 'react';
import {StyleSheet, Text} from 'react-native';

type Props = {
  title?: string;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    textTransform: 'capitalize',
    padding: 10,
  },
});

const Title = ({title}: Props) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;
