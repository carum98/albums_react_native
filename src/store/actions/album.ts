import {ThunkDispatch} from 'redux-thunk';
import {ADD_ALBUMNS, SELECT_ALBUM} from '.';
import {IAction} from '../../models/IAction';
import IAlbum from '../../models/IAlbum';
import {IState} from '../../models/IState';
import getData from '../../service/json_placeholder';

export const setAlbums = (payload: IAlbum[]): IAction => ({
  type: ADD_ALBUMNS,
  payload,
});

export const selectAlbum = (payload: IAlbum | null): IAction => ({
  type: SELECT_ALBUM,
  payload,
});

export const fetchAlbums =
  () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    const data = await getData();

    dispatch(setAlbums(data));
  };
