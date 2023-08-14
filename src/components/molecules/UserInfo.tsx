import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {User} from '../../types/User';

type Props = {
  user?: User;
};

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    padding: 15,
    alignItems: 'flex-start',
  },
});

const UserInfo = ({user}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Author: {user?.name}</Text>
      <Text>Company: {user?.company.name}</Text>
      <Text>Website: {user?.website}</Text>
    </View>
  );
};

export default UserInfo;
