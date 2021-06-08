import * as actions from '../actions';

const initialState = {
  user: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return { user: action.user };
    case actions.ACCESS_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};
