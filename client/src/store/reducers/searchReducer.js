import * as actions from '../actions';
const initialState = {
  searchPlayer: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_PLAYER:
      return { ...state, searchPlayer: action.searchPlayer };
    default:
      return state;
  }
};
