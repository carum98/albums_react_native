import styled from '@emotion/native';
import React, {FC} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import IAlbum from '../../models/IAlbum';
import {selectAlbum} from '../../store/actions/album';
import {AlbumItemProps} from '../molecules/AlbumItem';
import ImageItem from '../molecules/ImageItem';

export interface AlbumDetailProp {
  item: IAlbum;
}

const AlbumDetail: FC<AlbumItemProps> = ({item}) => {
  const {title, photos} = item;
  const dispatch = useDispatch();

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

  const BackButton = styled.TouchableOpacity`
    width: 60px;
    height: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: #4d88ff;
    color: white;
  `;

  const ButtonText = styled.Text`
    color: white;
    font-weight: bold;
  `;

  return (
    <View>
      <AppBar>
        <BackButton
          onPress={() => {
            dispatch(selectAlbum(null));
          }}>
          <ButtonText>{'Back'}</ButtonText>
        </BackButton>
        <Title numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Title>
      </AppBar>

      <FlatList
        data={photos}
        renderItem={({item}) => <ImageItem item={item} />}
        numColumns={3}
      />
    </View>
  );
};

export default AlbumDetail;
