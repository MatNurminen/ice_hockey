//import axios from 'axios';
import { fetchProtectedData } from '../utils';
import * as actions from './index';

export const getSeasons = () => async (dispatch) => {
  fetchProtectedData({ url: '/api/season', method: 'get' })((res) => {
    dispatch({ type: actions.GET_SEASONS, seasons: res });
  });
};
