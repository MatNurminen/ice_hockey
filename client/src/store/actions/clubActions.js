import * as actions from './index';

export const getClubs = () => ({ type: actions.GET_CLUBS_REQUEST });

export const getClub = (club_id, season) => ({
  type: actions.GET_CLUB_REQUEST,
  payload: [club_id, season],
});
