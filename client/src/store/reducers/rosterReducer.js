import * as actions from '../actions';
const initialState = {
  rosters: null,
  clubsByRoster: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ROSTERS_SUCCESS:
      return {
        ...state,
        rosters: action.payload.rosters,
        clubsByRoster: action.payload.clubs,
      };
    case actions.INSERT_PLAYER_TO_ROSTER_SUCCESS:
      return {
        ...state,
        rosters: [...state.rosters, action.payload],
      };
    case actions.DELETE_PLAYER_FROM_ROSTER_SUCCESS:
      return {
        ...state,
        rosters: state.rosters.filter(
          ({ championship_id }) => championship_id !== action.payload
        ),
      };
    default:
      return state;
  }
};
