import { set } from 'lodash';
import * as actions from './actions';
export const moduleName = 'players';

const initialState = {
  players: null,
  freeagents: null,
  playerById: null,
  champsStats: null,
  draft: null,
  draftCountries: null,
  draftClubs: null,
  draftPlayersByCountry: null,
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
    case actions.GET_DRAFT_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        draft: action.payload,
        draftCountries: payload.countries, // why? working without this
        draftClubs: payload.clubs, // why? working without this
      };
    case actions.GET_DRAFT_PLAYERS_BY_COUNTRY_SUCCESS:
      return {
        ...state,
        draftPlayersByCountry: action.payload.draftPlayersByCountry,
      };
    case actions.ADD_PLAYER_SUCCESS:
      return { ...state, players: null };
    case actions.EDIT_PLAYER_SUCCESS:
      return { ...state, playerById: action.payload };
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

export const getDraft = () => ({ type: actions.GET_DRAFT_REQUEST });

export const getDraftPlayersByCountry = (country_id) => ({
  type: actions.GET_DRAFT_PLAYERS_BY_COUNTRY_REQUEST,
  payload: [country_id],
});

export const createPlayer = (player, callback) => ({
  type: actions.ADD_PLAYER_REQUEST,
  payload: [player],
  callback,
});

export const editPlayer = (player, player_id, callback) => ({
  type: actions.EDIT_PLAYER_REQUEST,
  payload: [{ ...player, player_id }],
  callback,
});
