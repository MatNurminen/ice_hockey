import axios from 'axios';
import * as actions from './index';

export const getPlayersForSearch = () => async (dispatch) => {
  const res = await axios.get('/api/players/playerForSearch');
  dispatch({ type: actions.GET_PLAYERS_FOR_SEARCH, players: res.data });
};

export const getPlayers = () => async (dispatch) => {
  const res = await axios.get('/api/players');
  dispatch({ type: actions.GET_PLAYERS, players: res.data });
};

export const getFreeAgents = (season, country) => async (dispatch) => {
  const res = await axios.get('/api/freeagents', {
    params: { season, country },
  });
  dispatch({ type: actions.GET_FREE_AGENTS, freeagents: res.data });
};

export const createPlayer = (player) => async (dispatch) => {
  await axios.post('/api/players/create/new', player);
  dispatch({ type: actions.ADD_PLAYER });
};
