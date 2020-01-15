import { combineReducers } from 'redux';
import movieSearchReducer from './containers/MovieSearchContainer/movieSearchReducer';

const rootReducer = combineReducers({
    movie: movieSearchReducer,
});

export default rootReducer;