import React, {FC, useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import IAlbum from '../../models/IAlbum';
import getData from '../../service/json_placeholder';
import AlbumItem from '../molecules/AlbumItem';

export interface AlbumListProps {
  setSelected: React.Dispatch<React.SetStateAction<IAlbum | null>>;
}

const AlbumList: FC<AlbumListProps> = ({setSelected}) => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  useEffect(() => {
    getData().then(v => setAlbums(v));
  }, []);

  return (
    <View>
      {albums.length > 0 ? (
        <FlatList
          data={albums}
          renderItem={({item}) => (
            <AlbumItem item={item} setSelected={setSelected} />
          )}
        />
      ) : (
        <ActivityIndicator color="#000" />
      )}
    </View>
  );
};

export default AlbumList;
