import axios from 'axios';
import * as actions from './index';

export const getSearchPlayer = (strSearch) => ({
  type: actions.SEARCH_PLAYER_REQUEST,
  payload: { strSearch },
});
