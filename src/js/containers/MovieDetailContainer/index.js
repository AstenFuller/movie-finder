import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

    function mapStoreToProps(store) {
        return {
            imdb: store.imdb.imdb

        };
    }
    
          export default connect(mapStoreToProps)(MovieDetailContainer);