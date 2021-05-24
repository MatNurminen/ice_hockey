import * as actions from '../actions';
const initialState = {
  searchPlayer: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_PLAYER_SUCCESS:
      return { ...state, searchPlayer: action.payload };
    default:
      return state;
  }
};
