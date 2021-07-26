import IPhoto from './IPhoto';

export default interface IAlbum {
  id: number;
  userId: number;
  title: String;
  photos: IPhoto[];
}
