import { combineReducers } from 'redux';
import movieSearchReducer from './containers/movieSearchReducer';

const rootReducer = combineReducers({
    movie: movieSearchReducer,
});

export default rootReducer;