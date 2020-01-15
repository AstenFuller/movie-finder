import React from 'react';
import { updateMovieSearchInput, submitMovie } from './movieSearchAction';
        
class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmitMovieInput = this.handleSubmitMovieInput.bind(this);
        this.handleGetSearchMovieInput = this.handleGetSearchMovieInput.bind(this);
    }
        
    handleGetSearchMovieInput(e) {
        const { value } = e.target;
        const { dispatch } = this.props;
        dispatch(updateMovieSearchInput(value));
    }
    
    handleSubmitMovieInput() {
        const { dispatch } = this.props;
        fetch(`/movieInfo/${this.props.input}`)
            .then(response => response.json())
            .then(data => {
                dispatch(submitMovie(data.Search))
            })
        
    }

    render() {
        const { movie } = this.props;
       {console.log(movie)}
        return (
            <div className='container'>
                <h1>Movie Finder</h1>
                <input className='movieFinderInput' 
                value={this.props.input}
                onChange={this.handleGetSearchMovieInput}
                />
                <button className='submitMovieFinder'
                onClick={this.handleSubmitMovieInput}>Go!</button>
                    {
                        movie.map( (movie, index) => (
                            <div className='movie-display' key={index}>
                                <div className='poster-display'>
                                    <img src={movie.Poster} />
                                </div>
                                <div className='movie-title'>
                                    <h5>{movie.Title}</h5>
                                    <span className='movie-year'>{movie.Year}</span>
                                </div>
                                <button className='more-information'>More Information</button>

                            </div>

                        ))
                        
                    }
            </div>
            )
    }
}
        
export default MovieSearchContainer;