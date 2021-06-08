import * as actions from './actions/index';
import queryString from 'query-string';
import { fetchProtectedData } from './utils';

const actionMap = (params = []) => {
  let urlModify = '';
  if (params.length) {
    urlModify = params.join('/');
  } else {
    urlModify = '?' + queryString.stringify(params);
  }

  return {
    [actions.GET_LEAGUES_REQUEST]: {
      url: '/api/leagues',
      method: 'get',
      selector: (data) => data,
    },
    [actions.GET_LEAGUE_REQUEST]: {
      url: `/api/leagues/${urlModify}`,
      method: 'get',
      selector: (data) => data,
    },

    [actions.GET_COUNTRIES_REQUEST]: {
      url: '/api/countries',
      method: 'get',
      selector: (data) => data,
    },
    [actions.GET_COUNTRY_REQUEST]: {
      url: `/api/countries/${urlModify}`,
      method: 'get',
      selector: (data) => data,
    },
    [actions.GET_COUNTRY_BY_LEAGUE_REQUEST]: {
      url: `/api/chart/${urlModify}`,
      method: 'get',
      selector: (data) => data,
    },

    [actions.GET_CLUBS_REQUEST]: {
      url: '/api/clubs',
      method: 'get',
      selector: (data) => data,
    },
    [actions.GET_CLUB_REQUEST]: {
      url: `/api/clubs/${urlModify}`,
      method: 'get',
      selector: (data) => data,
    },

    [actions.GET_FREE_AGENTS_REQUEST]: {
      url: `/api/freeagents/${urlModify}`,
      method: 'get',
      selector: (data) => data,
    },

    [actions.GET_PLAYERS_REQUEST]: {
      url: `/api/players`,
      method: 'get',
      selector: (data) => data,
    },
    [actions.GET_PLAYER_REQUEST]: {
      url: `/api/players/${urlModify}`,
      method: 'get',
      selector: (data) => data,
    },

    [actions.GET_ROSTERS_REQUEST]: {
      url: `/api/rosters/${urlModify}`,
      method: 'get',
      selector: (data) => data,
    },

    [actions.INSERT_PLAYER_TO_ROSTER_REQUEST]: {
      url: `/api/rosters/`,
      method: 'post',
      body: params,
      selector: (data) => data,
    },

    [actions.GET_PLAYERS_FOR_SEARCH_REQUEST]: {
      url: `api/players/playerForSearch`,
      method: 'get',
      selector: (data) => data,
    },

    [actions.SEARCH_PLAYER_REQUEST]: {
      url: `api/search/${urlModify}`,
      method: 'get',
      selector: (data) => data,
    },

    [actions.DELETE_PLAYER_FROM_ROSTER_REQUEST]: {
      url: `/api/rosters/${urlModify}`,
      method: 'delete',
      selector: (data) => data,
    },
  };
};

export const fetchMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type.includes('REQUEST')) {
    const mapValue = actionMap(action.payload)[action.type];
    const token = window.localStorage.getItem('token');
    if (!token && mapValue.method !== 'get') {
      storeAPI.dispatch({
        type: 'ACCESS_ERROR',
        payload: 'Need SignIn',
      });
    } else {
      fetchProtectedData(mapValue)(
        (data) => {
          storeAPI.dispatch({
            type: action.type.replace('REQUEST', 'SUCCESS'),
            payload: mapValue.selector(data),
          });
        },
        (error) => {
          storeAPI.dispatch({
            type: 'ACCESS_ERROR',
            payload: error.message,
          });
        }
      );
    }
  }
  return next(action);
};
