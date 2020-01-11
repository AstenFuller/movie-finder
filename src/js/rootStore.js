import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const rootStore = createStore(rootReducer, composeEnhancers(
  applyMiddleware(
      promise
  )
));
/* eslint-enable */

export default rootStore;
