import { combineReducers } from 'redux';
import movieDetailReducer from './containers/MovieDetailContainer/movieDetailReducer';
import movieSearchReducer from './containers/MovieSearchContainer/movieSearchReducer';

const rootReducer = combineReducers({
    movie: movieSearchReducer,
    imdb: movieDetailReducer
});

export default rootReducer;