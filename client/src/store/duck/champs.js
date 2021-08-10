import * as actions from './actions';
export const moduleName = 'champs';

const initialState = {
  clubs: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CHAMP_BY_SEASON_AND_LEAGUE_SUCCESS:
      return { ...state, clubs: action.payload };
    default:
      return state;
  }
};

export const getClubsBySeasonAndLeague = (season, league) => ({
  type: actions.GET_CHAMP_BY_SEASON_AND_LEAGUE_REQUEST,
  payload: { season, league },
});
