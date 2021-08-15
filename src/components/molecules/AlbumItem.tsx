import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAlbums} from '../../context/album-context';
import IAlbum from '../../models/IAlbum';
export interface AlbumItemProps {
  item: IAlbum;
  navigation: any;
}

const AlbumItem: FC<AlbumItemProps> = ({item, navigation}) => {
  const {userId, title} = item;

  const {setSelected} = useAlbums();

  const styles = StyleSheet.create({
    itemRow: {
      display: 'flex',
      margin: 10,
      padding: 10,
      backgroundColor: '#e6f2ff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ced9ff',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    subTitle: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(item);
        navigation.push('Detail');
      }}>
      <View style={styles.itemRow}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subTitle}>
          <Text>User: {userId}</Text>
          <Text>Count: {item.photos.length}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AlbumItem;
