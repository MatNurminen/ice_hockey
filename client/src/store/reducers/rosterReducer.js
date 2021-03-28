import * as actions from '../actions';
const initialState = {
  rosters: null,
  clubsByRoster: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ROSTERS:
      return {
        ...state,
        rosters: action.rostersAndClubs.rosters,
        clubsByRoster: action.rostersAndClubs.clubs,
      };
    case actions.INSERT_PLAYER_TO_ROSTER:
      return {
        ...state,
        rosters: [...state.rosters, action.payload],
      };
    case actions.DELETE_PLAYER_FROM_ROSTER:
      return {
        ...state,
        rosters: state.rosters.filter(
          ({ championship_id }) =>
            championship_id !== action.payload.championship_id
        ),
      };
    default:
      return state;
  }
};
