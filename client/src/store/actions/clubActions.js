import axios from 'axios';
import * as actions from './index';

export const getClubs = () => async (dispatch) => {
  const res = await axios.get('/api/clubs');
  dispatch({ type: actions.GET_CLUBS, clubs: res.data });
};

export const getClub = (club_id, season) => async (dispatch) => {
  const { data } = await axios.get(`/api/clubs/${club_id}/${season}`);
  dispatch({
    type: actions.GET_CLUB,
    clubAndStats: {
      club: data.club,
      roster: data.roster,
      clubhistory: data.clubhistory,
    },
  });
};
