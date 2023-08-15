import React from 'react';
import {StyleSheet} from 'react-native';
import Spinner from '../atoms/Spinner';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150,
  },
});

type Props = {
  isLoading: boolean;
};

const Loading = ({isLoading}: Props) => {
  return isLoading ? <Spinner style={styles.container} /> : null;
};

export default Loading;
