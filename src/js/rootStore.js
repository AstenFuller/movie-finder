import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
/* eslint-enable */

const rootStore = createStore(
    rootReducer, 
    composeEnhancers(
        applyMiddleware(
           promiseMiddleware()
  )
));

export default rootStore;
