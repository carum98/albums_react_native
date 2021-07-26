import React, {Component, FC} from 'react';
import {View, Text, Button, Image, FlatList} from 'react-native';
import IAlbum from '../../models/IAlbum';
import {AlbumItemProps} from '../molecules/AlbumItem';

export interface AlbumDetailProp {
  item: IAlbum;
  setSelected: React.Dispatch<React.SetStateAction<IAlbum | null>>;
}

class AlbumDetail extends Component<AlbumItemProps> {
  render() {
    const {title, photos} = this.props.item;

    return (
      <View>
        <Text>{title}</Text>
        <Button
          title="Back"
          onPress={() => {
            this.props.setSelected(null);
          }}
        />
        <FlatList
          data={photos}
          renderItem={({item}) => (
            <Image
              style={{height: 100, width: 100}}
              source={{uri: `${item.thumbnailUrl}`}}
            />
          )}
          numColumns={3}
        />
      </View>
    );
  }
}

export default AlbumDetail;
