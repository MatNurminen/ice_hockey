import * as actions from '../actions';
const initialState = {
  clubs: null,
  club: null,
  roster: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CLUBS:
      return { ...state, clubs: action.clubs };
    case actions.GET_CLUB:
      return {
        ...state,
        club: action.clubAndStats.club,
        roster: action.clubAndStats.roster,
      };
    default:
      return state;
  }
};
