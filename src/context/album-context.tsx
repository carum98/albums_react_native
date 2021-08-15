import React, {createContext, useContext, useState} from 'react';
import IAlbum from '../models/IAlbum';
import getData from '../service/json_placeholder';

interface AlbumcontextProps {
  albums: IAlbum[];
  selected: IAlbum | null;
  setSelected: (selected: IAlbum | null) => void;
  fetchAlbums: () => Promise<void>;
}

const AlbumContext = createContext<AlbumcontextProps>({
  albums: [],
  selected: null,
  setSelected: () => {},
  fetchAlbums: () => Promise.resolve(),
});

export const AlbumProvider: React.FC = ({children}) => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [selected, setSelected] = useState<IAlbum | null>(null);

  const fetchAlbums = async () => {
    console.log('FetchAlbums');
    const data = await getData();

    setAlbums(data);
  };

  const val = {albums, fetchAlbums, selected, setSelected};

  return <AlbumContext.Provider value={val}>{children}</AlbumContext.Provider>;
};

export const useAlbums = () => useContext(AlbumContext);
