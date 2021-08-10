import * as actions from './actions';
export const moduleName = 'clubs';

const initialState = {
  clubs: null,
  club: null,
  roster: null,
  clubhistory: null,
  validclubs: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CLUBS_SUCCESS:
      return { ...state, clubs: action.payload };
    case actions.GET_CLUB_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        club: payload.club,
        roster: payload.roster,
        clubhistory: payload.clubhistory,
      };
    case actions.GET_VALIDCLUBS_SUCCESS:
      return { ...state, validclubs: action.payload };
    default:
      return state;
  }
};

export const getClubs = () => ({ type: actions.GET_CLUBS_REQUEST });

export const getClub = (club_id, season) => ({
  type: actions.GET_CLUB_REQUEST,
  payload: [club_id, season],
});

export const getValidClubs = (league_id) => ({
  type: actions.GET_VALIDCLUBS_REQUEST,
  payload: { league_id },
});
