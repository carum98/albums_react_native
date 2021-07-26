import styled from '@emotion/native';
import React, {FC, useState} from 'react';
import {View} from 'react-native';
import IAlbum from '../../models/IAlbum';
import AlbumDetail from '../organisms/AlbumDetail';
import AlbumList from '../organisms/AlbumList';

const HomeScreen: FC = () => {
  const [selected, setSelected] = useState<IAlbum | null>(null);

  const Container = styled.View`
    padding: 0px 10px;
  `;

  return (
    <Container>
      {selected ? (
        <AlbumDetail item={selected} setSelected={setSelected} />
      ) : (
        <AlbumList setSelected={setSelected}></AlbumList>
      )}
    </Container>
  );
};

export default HomeScreen;
