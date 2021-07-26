import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import IAlbum from '../../models/IAlbum';
import {AlbumItemProps} from '../molecules/AlbumItem';

export interface AlbumDetailProp {
  item: IAlbum;
  setSelected: React.Dispatch<React.SetStateAction<IAlbum | null>>;
}

const AlbumDetail: FC<AlbumItemProps> = ({item, setSelected}) => {
  return (
    <View>
      <Text>{item.title}</Text>
      <Button
        title="Back"
        onPress={() => {
          setSelected(null);
        }}
      />
    </View>
  );
};

export default AlbumDetail;
