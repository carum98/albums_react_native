import React from 'react';
import {AlbumProvider} from './src/context/album-context';
import MyNavigation from './src/navigation';

const App = () => {
  return (
    <AlbumProvider>
      <MyNavigation />
    </AlbumProvider>
  );
};

export default App;
