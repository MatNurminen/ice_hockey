import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { fetchMiddleware } from './middleware';
import reducers from './reducers';

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  enhancers(applyMiddleware(thunk, fetchMiddleware, logger))
);
