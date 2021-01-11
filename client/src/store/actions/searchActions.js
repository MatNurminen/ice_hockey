import axios from 'axios';
import * as actions from './index';

export const getSearchPlayer = (strSearch) => async (dispatch) => {
  const res = await axios.get('/api/search', { params: { strSearch } });
  dispatch({ type: actions.SEARCH_PLAYER, searchPlayer: res.data });
};
