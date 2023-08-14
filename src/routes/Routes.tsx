import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PostDetails from '../screens/PostDetails';
import {RootStackParams, Routes} from './RootStackParams';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParams>();
const AppRoutes = () => {
  return (
    <Navigator initialRouteName={Routes.Home}>
      <Screen name={Routes.Home} component={Home} />
      <Screen name={Routes.PostDetails} component={PostDetails} />
    </Navigator>
  );
};

export default AppRoutes;
