import axios from 'axios';
import * as actions from './index';

export const getLeagues = () => async (dispatch) => {
  const res = await axios.get('/api/leagues');
  dispatch({ type: actions.GET_LEAGUES, leagues: res.data });
};
