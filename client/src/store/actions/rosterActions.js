import * as actions from './index';
const queryString = require('query-string');

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
