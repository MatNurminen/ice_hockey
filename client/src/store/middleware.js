import * as actions from './actions/index';
import { fetchProtectedData } from './utils';

const actionMap = (params = []) => {
  const urlModify = params.join('/');
  return {
    [actions.GET_LEAGUES]: {
      url: '/api/leagues',
      method: 'get',
      selector: (data) => data,
    },
    [actions.GET_LEAGUE]: {
      url: `/api/leagues/${urlModify}`,
      method: 'get',
      selector: (data) => data,
    },
  };
};

export const fetchMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type !== actions.SET_USER) {
    const mapValue = actionMap(action.payload)[action.type];
    fetchProtectedData(mapValue)((data) => {
      return next({
        type: action.type,
        payload: mapValue.selector(data),
      });
    });
  } else {
    return next(action);
  }
};
