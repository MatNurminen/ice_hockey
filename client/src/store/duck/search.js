import * as actions from './actions';
export const moduleName = 'search';

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

export const getSearchPlayer = (strSearch) => ({
  type: actions.SEARCH_PLAYER_REQUEST,
  payload: { strSearch },
});
