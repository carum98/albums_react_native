import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import IAlbum from '../../models/IAlbum';
import {selectAlbum} from '../../store/actions/album';

export interface AlbumItemProps {
  item: IAlbum;
}

const AlbumItem: FC<AlbumItemProps> = ({item}) => {
  const {id, userId, title} = item;
  const dispatch = useDispatch();

  const styles = StyleSheet.create({
    itemRow: {
      display: 'flex',
      margin: 10,
      padding: 10,
      backgroundColor: '#e6f2ff',
      borderRadius: 10,
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
    <TouchableOpacity onPress={() => dispatch(selectAlbum(item))}>
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
