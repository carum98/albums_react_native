import {IAction} from '../../models/IAction';
import IAlbum from '../../models/IAlbum';
import {ADD_ALBUMNS, SELECT_ALBUM} from '../actions';

export interface IAlbumState {
  albums: IAlbum[];
  selected: IAlbum | null;
}

const initialState: IAlbumState = {
  albums: [],
  selected: null,
};

export default (
  state = initialState,
  {type, payload}: IAction,
): IAlbumState => {
  switch (type) {
    case ADD_ALBUMNS:
      return {...state, albums: payload as IAlbum[]};
    case SELECT_ALBUM:
      return {...state, selected: payload as IAlbum | null};
    default:
      return state;
  }
};
