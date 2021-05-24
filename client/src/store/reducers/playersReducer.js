import * as actions from '../actions';
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
    case actions.ADD_PLAYER:
      return { ...state, players: null };
    default:
      return state;
  }
};
