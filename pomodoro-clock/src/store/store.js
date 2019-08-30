import { createStore, combineReducers } from 'redux';

import { settings, timer } from '../reducers/rootReducer';

const reducers = combineReducers({
  settings,
  timer,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
