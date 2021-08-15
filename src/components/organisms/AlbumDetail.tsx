import styled from '@emotion/native';
import React, {FC} from 'react';
import {View, FlatList} from 'react-native';
import {useAlbums} from '../../context/album-context';
import ImageItem from '../molecules/ImageItem';

const AlbumDetail: FC = () => {
  const {selected} = useAlbums();

  const AppBar = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  `;

  const Title = styled.Text`
    font-size: 20px;
    flex-grow: 2;
    text-align: center;
    margin-left: 10px;
  `;

  return (
    <View>
      <AppBar>
        <Title numberOfLines={1} ellipsizeMode="tail">
          {selected?.title}
        </Title>
      </AppBar>

      <FlatList
        data={selected?.photos}
        renderItem={({item}) => <ImageItem item={item} />}
        numColumns={3}
      />
    </View>
  );
};

export default AlbumDetail;
