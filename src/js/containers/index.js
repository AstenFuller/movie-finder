import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

    function mapStoreToProps(store) {
        return {
            input: store.movie.input,
            movie: store.movie.movie
            
        };
    }
    
          export default connect(mapStoreToProps)(MovieSearchContainer);