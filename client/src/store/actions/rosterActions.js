import axios from 'axios';
import * as actions from './index';

export const getRosters = (year, league) => async (dispatch) => {
  const res = await axios.get('/api/rosters', {
    params: { year, league },
  });
  dispatch({ type: actions.GET_ROSTERS, rosters: res.data });
};

export const insertPlayerToRoster = (season, player_id, club_id) => async (
  dispatch
) => {
  await axios.post('/api/rosters/insert', {
    season,
    player_id,
    club_id,
  });
  // TODO получить ответ и вернуть его в редюссер
  // dispatch({
  //   type: actions.INSERT_PLAYER_TO_ROSTER,
  //   payload: { season, player_id, club_id },
  // });
};

export const deletePlayerFromRoster = (championship_id) => async (dispatch) => {
  await axios.delete(`/api/rosters/${championship_id}`);
  dispatch({
    type: actions.DELETE_PLAYER_FROM_ROSTER,
    payload: { championship_id },
  });
};
