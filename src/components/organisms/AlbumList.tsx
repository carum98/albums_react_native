import React, {FC, useEffect} from 'react';
import {View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import {useAlbums} from '../../context/album-context';
import AlbumItem from '../molecules/AlbumItem';

interface Props {
  navigation: any;
}

const AlbumList: FC<Props> = ({navigation}) => {
  const {albums, fetchAlbums} = useAlbums();

  useEffect(() => {
    fetchAlbums();
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
          renderItem={({item}) => (
            <AlbumItem item={item} navigation={navigation} />
          )}
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
