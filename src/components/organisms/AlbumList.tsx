import React, {FC, useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../models/IState';
import {fetchAlbums} from '../../store/actions/album';
import AlbumItem from '../molecules/AlbumItem';

const AlbumList: FC = () => {
  const albums = useSelector((state: IState) => state.Album.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  const styles = StyleSheet.create({
    loading: {
      justifyContent: 'center',
      height: 200,
    },
  });

  return (
    <View>
      {albums.length > 0 ? (
        <FlatList
          data={albums}
          renderItem={({item}) => <AlbumItem item={item} />}
        />
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

export default AlbumList;
