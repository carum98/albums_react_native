import styled from '@emotion/native';
import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {useAlbums} from '../../context/album-context';
import {IState} from '../../models/IState';
import AlbumDetail from '../organisms/AlbumDetail';
import AlbumList from '../organisms/AlbumList';

const HomeScreen: FC = () => {
  const Container = styled.View`
    padding: 0px 10px;
  `;

  const selected = useSelector((state: IState) => state.Album.selected);
  // const { selected } = useAlbums()

  return (
    <Container>
      {selected ? <AlbumDetail item={selected} /> : <AlbumList></AlbumList>}
    </Container>
  );
};

export default HomeScreen;
