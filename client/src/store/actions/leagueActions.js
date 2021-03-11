import axios from 'axios';
import * as actions from './index';

export const getLeagues = () => async (dispatch) => {
  const res = await axios.get('/api/leagues');
  dispatch({ type: actions.GET_LEAGUES, leagues: res.data });
};
export const getLeague = (league_id) => async (dispatch) => {
  const res = await axios.get(`/api/leagues/${league_id}`);
  dispatch({ type: actions.GET_LEAGUE, league: res.data });
};
export const getClubsByLeague = (league_id) => async (dispatch) => {
  const res = await axios.get(`/api/leagues/clubs/${league_id}`);
  dispatch({ type: actions.GET_CLUBS_BY_LEAGUE, clubsByLeague: res.data });
};
