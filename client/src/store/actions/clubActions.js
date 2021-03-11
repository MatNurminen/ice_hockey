import axios from 'axios';
import * as actions from './index';

export const getClubs = () => async (dispatch) => {
  const res = await axios.get('/api/clubs');
  dispatch({ type: actions.GET_CLUBS, clubs: res.data });
};

export const getClub = (club_id) => async (dispatch) => {
  const res = await axios.get(`/api/clubs/${club_id}`);
  dispatch({ type: actions.GET_CLUB, club: res.data });
};
