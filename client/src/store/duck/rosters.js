import * as actions from './actions';
export const moduleName = 'rosters';
const queryString = require('query-string');

const initialState = {
  rosters: null,
  clubsByRoster: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ROSTERS_SUCCESS:
      return {
        ...state,
        rosters: action.payload.rosters,
        clubsByRoster: action.payload.clubs,
      };
    case actions.INSERT_PLAYER_TO_ROSTER_SUCCESS:
      return {
        ...state,
        rosters: [...state.rosters, action.payload],
      };
    case actions.DELETE_PLAYER_FROM_ROSTER_SUCCESS:
      return {
        ...state,
        rosters: state.rosters.filter(
          ({ championship_id }) => championship_id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const getRosters = (year, league) => ({
  type: actions.GET_ROSTERS_REQUEST,
  payload: { year, league },
});

export const insertPlayerToRoster =
  (season, player_id, club_id, closeSearch) => async (dispatch) => {
    await dispatch({
      type: actions.INSERT_PLAYER_TO_ROSTER_REQUEST,
      payload: {
        season,
        player_id,
        club_id,
        league: queryString.parse(window.location.search).league || 0,
      },
    });
    await closeSearch();
  };

export const deletePlayerFromRoster = (championship_id) => ({
  type: actions.DELETE_PLAYER_FROM_ROSTER_REQUEST,
  payload: [championship_id],
});
