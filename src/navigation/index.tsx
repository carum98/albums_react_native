import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import AlbumDetail from '../components/organisms/AlbumDetail';
import AlbumList from '../components/organisms/AlbumList';

const MyNavigation = () => {
  const {Screen, Navigator} = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="List">
        <Screen name="List" component={AlbumList} />
        <Screen name="Detail" component={AlbumDetail} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MyNavigation;
