import axios from 'axios';
import * as actions from './index';

export const getSeasons = () => async (dispatch) => {
  const res = await axios.get('/api/season');
  dispatch({ type: actions.GET_SEASONS, seasons: res.data });
};
