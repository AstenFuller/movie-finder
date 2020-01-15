import { connect } from 'react-redux';
import MovieDetailContainer from './movieDetailContainer';

    function mapStoreToProps(store) {
        return {
            imdb: store.imdb.imdb

        };
    }
    
          export default connect(mapStoreToProps)(MovieDetailContainer);