import { connect } from 'react-redux';
import MovieSearchContainer from './movieSearchContainer';

    function mapStoreToProps(store) {
        return {
            input: store.movie.input,
            movie: store.movie.movie
            
        };
    }
    
          export default connect(mapStoreToProps)(MovieSearchContainer);