import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from './screens/Feed/FeedScreen';

const {Navigator, Screen} = createNativeStackNavigator();
const AppRoutes = () => {
  return (
    <Navigator>
      <Screen name="Feed" component={FeedScreen} />
    </Navigator>
  );
};

export default AppRoutes;
