import * as actions from '../actions';
const initialState = {
  players: null,
  freeagents: null,
  playerById: null,
  champsStats: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PLAYERS_FOR_SEARCH:
      return { ...state, players: action.players };
    case actions.GET_PLAYERS:
      return { ...state, players: action.players };
    case actions.GET_PLAYER:
      return {
        ...state,
        playerById: action.playerAndStats.playerById,
        champsStats: action.playerAndStats.champsStats,
      };
    case actions.GET_FREE_AGENTS:
      return { ...state, freeagents: action.freeagents };
    case actions.ADD_PLAYER:
      return { ...state, players: null };
    default:
      return state;
  }
};
