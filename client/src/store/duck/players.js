import * as actions from './actions';
export const moduleName = 'players';

const initialState = {
  players: null,
  freeagents: null,
  playerById: null,
  champsStats: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PLAYERS_FOR_SEARCH_SUCCESS:
      return { ...state, players: action.payload };
    case actions.GET_PLAYERS_SUCCESS:
      return { ...state, players: action.payload };
    case actions.GET_PLAYER_SUCCESS:
      return {
        ...state,
        playerById: action.payload.playerById,
        champsStats: action.payload.champsStats,
      };
    case actions.GET_FREE_AGENTS_SUCCESS:
      return { ...state, freeagents: action.payload };
    case actions.ADD_PLAYER_SUCCESS:
      return { ...state, players: null };
    default:
      return state;
  }
};

export const getPlayers = () => ({ type: actions.GET_PLAYERS_REQUEST });

export const getPlayer = (player_id) => ({
  type: actions.GET_PLAYER_REQUEST,
  payload: [player_id],
});

export const getPlayersForSearch = () => ({
  type: actions.GET_PLAYERS_FOR_SEARCH_REQUEST,
});

export const getFreeAgents = (season, country) => ({
  type: actions.GET_FREE_AGENTS_REQUEST,
  payload: { season, country },
});

export const createPlayer = (player) => ({
  type: actions.ADD_PLAYER_REQUEST,
  payload: [player],
});
