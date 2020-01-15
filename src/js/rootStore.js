import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__  || compose;

const rootStore = createStore(
    rootReducer, 
    composeEnhancers(
        applyMiddleware(
           promiseMiddleware()
  )
));

export default rootStore;
