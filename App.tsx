/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import HomeScreen from './src/components/screens/HomeScreen';

import thunk from 'redux-thunk';
import * as reducers from './src/store/reducers';
import {AlbumProvider} from './src/context/album-context';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(compose(thunk)),
);

const App = () => {
  return (
    <Provider store={store}>
      <AlbumProvider>
        <SafeAreaView>
          <HomeScreen></HomeScreen>
        </SafeAreaView>
      </AlbumProvider>
    </Provider>
  );
};

export default App;
