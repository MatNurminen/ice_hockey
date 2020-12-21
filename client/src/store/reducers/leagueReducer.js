import * as actions from '../actions';
const initialState = {
  leagues: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LEAGUES:
      return { ...state, leagues: action.leagues };
    default:
      return state;
  }
};
