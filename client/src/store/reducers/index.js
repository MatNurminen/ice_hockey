import { combineReducers } from 'redux';

import authReducer from './authReducer';
import leagueReducer from './leagueReducer';
import rosterReducer from './rosterReducer';
import playersReducer from './playersReducer';
import countryReducer from './countryReducer';
import seasonReducer from './seasonReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  authReducer,
  leagueReducer,
  countryReducer,
  rosterReducer,
  playersReducer,
  seasonReducer,
  searchReducer,
});
