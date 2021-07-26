import React, {FC} from 'react';
import {View, Text, Button, Image, FlatList} from 'react-native';
import IAlbum from '../../models/IAlbum';
import {AlbumItemProps} from '../molecules/AlbumItem';

export interface AlbumDetailProp {
  item: IAlbum;
  setSelected: React.Dispatch<React.SetStateAction<IAlbum | null>>;
}

const AlbumDetail: FC<AlbumItemProps> = ({item, setSelected}) => (
  <View>
    <Text>{item.title}</Text>
    <Button
      title="Back"
      onPress={() => {
        setSelected(null);
      }}
    />
    <FlatList
      data={item.photos}
      renderItem={({item}) => (
        <Image
          style={{height: 100, width: 100}}
          source={{uri: `${item.thumbnailUrl}`}}
        />
      )}
      numColumns={4}
    />
  </View>
);

export default AlbumDetail;
