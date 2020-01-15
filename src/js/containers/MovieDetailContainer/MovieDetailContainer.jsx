import React from 'react';
import { getImdb } from './movieDetailAction';
import { Link } from 'react-router-dom';
        
class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    fetch(`/movie/${id}`)
      .then(response => response.json())
      .then(data => {
          dispatch(getImdb(data))
      })
  }

  render() {
    const { imdb } = this.props;

    return (
      <div>
        <h1>Movie Detail Container</h1>
        <div className='link-div'>
          <Link to='/' className='link'>
            Go Back
          </Link>
        </div>
        <div className='flex-container'>
          <div className='imdb-poster'>
            <img src={imdb.Poster} />
          </div>
          <div className='panel panel-info'>
             <div className='panel-heading'>Movie Details</div>
             <div className='panel-body'>
               <h6>{imdb.Title}</h6>
               <p><span>Released {imdb.Year}</span> <span>{imdb.Runtime}</span> <span>{imdb.Genre}</span></p>
               <p>{imdb.Plot}</p>
               <p>{imdb.Awards}</p>
               <p className='metascore'><b>Metascore:</b> {imdb.Metascore}/100</p>
               <p><b>IMDB:</b> {imdb.imdbRating}</p>
             </div>
          </div>
       </div>
      </div>
    )
  }
}

export default MovieDetailContainer;