import * as actions from './actions';
import { fetchProtectedData } from '../utils';
export const moduleName = 'seasons';

const initialState = {
  seasons: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SEASONS:
      return { ...state, seasons: action.seasons };
    default:
      return state;
  }
};

export const getSeasons = () => async (dispatch) => {
  fetchProtectedData({ url: '/api/season', method: 'get' })((res) => {
    dispatch({ type: actions.GET_SEASONS, seasons: res });
  });
};
