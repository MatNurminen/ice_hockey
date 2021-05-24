import axios from 'axios';
import * as actions from './index';

export const getPlayersForSearch = () => ({
  //const res = await axios.get('/api/players/playerForSearch');
  type: actions.GET_PLAYERS_FOR_SEARCH_REQUEST,
});

export const getPlayers = () => ({ type: actions.GET_PLAYERS_REQUEST });

export const getPlayer = (player_id) => ({
  type: actions.GET_PLAYER_REQUEST,
  payload: [player_id],
});

export const getFreeAgents = (season, country) => ({
  type: actions.GET_FREE_AGENTS_REQUEST,
  payload: { season, country },
});

export const createPlayer = (player) => async (dispatch) => {
  await axios.post('/api/players/create/new', player);
  dispatch({ type: actions.ADD_PLAYER });
};
