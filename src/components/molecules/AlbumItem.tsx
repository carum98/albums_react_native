import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import IAlbum from '../../models/IAlbum';

export interface AlbumItemProps {
  item: IAlbum;
  setSelected: React.Dispatch<React.SetStateAction<IAlbum | null>>;
}

const AlbumItem: FC<AlbumItemProps> = ({item, setSelected}) => {
  const {id, userId, title} = item;

  return (
    <TouchableOpacity onPress={() => setSelected(item)}>
      <Text>
        {id}. {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AlbumItem;
