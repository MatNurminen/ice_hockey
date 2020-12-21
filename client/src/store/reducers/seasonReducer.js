import * as actions from '../actions';
const initialState = {
  seasons: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SEASONS:
      return { ...state, seasons: action.seasons };
    default:
      return state;
  }
};
