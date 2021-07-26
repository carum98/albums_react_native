import axios from 'axios';
import IAlbum from '../models/IAlbum';
import IPhoto from '../models/IPhoto';

export default async function getData() {
  try {
    const responseAlbums = await axios.get(
      'https://jsonplaceholder.typicode.com/albums',
    );

    const responsePhotos = await axios.get(
      'https://jsonplaceholder.typicode.com/photos',
    );

    const albums = (responseAlbums.data as IAlbum[]).map(album => ({
      ...album,
      photos: (responsePhotos.data as IPhoto[]).filter(
        todo => todo.albumId === album.id,
      ),
    }));

    return albums;
  } catch (error) {
    console.log(error);
  }
}
