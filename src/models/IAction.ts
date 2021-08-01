import IAlbum from './IAlbum';

export interface IAction {
  type: String;
  payload: IAlbum[] | IAlbum | null;
}
