import React from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';

type Props = {
  style: ViewStyle;
};

const Spinner = ({style}: Props) => {
  return (
    <View style={style}>
      <ActivityIndicator size="large" color="#EE4E34" />
    </View>
  );
};

export default Spinner;
