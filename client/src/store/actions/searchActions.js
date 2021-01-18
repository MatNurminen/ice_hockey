import axios from 'axios';
import * as actions from './index';

export const getSearchPlayer = (strSearch) => async (dispatch) => {
  if (!strSearch) {
    await dispatch({ type: actions.SEARCH_PLAYER, searchPlayer: [] });
  } else {
    const res = await axios.get('/api/search', { params: { strSearch } });
    await dispatch({ type: actions.SEARCH_PLAYER, searchPlayer: res.data });
  }
};
