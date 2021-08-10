import { combineReducers } from 'redux';

import authReducer, { moduleName as authModule } from './auth';
import countriesReducer, { moduleName as countriesModule } from './countries';
import leaguesReducer, { moduleName as leaguesModule } from './leagues';
import seasonsReducer, { moduleName as seasonsModule } from './seasons';
import clubsReducer, { moduleName as clubsModule } from './clubs';
import playersReducer, { moduleName as playersModule } from './players';
import rostersReducer, { moduleName as rostersModule } from './rosters';
import searchReducer, { moduleName as searchModule } from './search';
import champsReducer, { moduleName as champsModule } from './champs';

export default combineReducers({
  [authModule]: authReducer,
  [countriesModule]: countriesReducer,
  [leaguesModule]: leaguesReducer,
  [seasonsModule]: seasonsReducer,
  [clubsModule]: clubsReducer,
  [playersModule]: playersReducer,
  [rostersModule]: rostersReducer,
  [searchModule]: searchReducer,
  [champsModule]: champsReducer,
});
