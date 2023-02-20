import { useState, useEffect } from 'react';
import { TheMovieDbAPI } from 'components/helpers/api';
// import { MovieList, MovieItem, Link } from './Home.styled';
import { useParams, Link } from 'react-router-dom';

const theMovieDbAPI = new TheMovieDbAPI();

export function MovieDetails() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await theMovieDbAPI.getMovieInfoById(moviesId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getMovies();
  }, []);

  const { id, poster_path, title, vote_average, genres, overview } = movie;

  return (
    <>
      <button type="button">Go back</button>
      {movie && (
        <div>
          <img src={`${TheMovieDbAPI.IMG_URL + poster_path}`} alt={title} />
          <h1>{title}</h1>
          <p>User score: {vote_average * 10} %</p>
          <p>
            <b>Overview:</b>
            {overview}
          </p>
          {genres && (
            <p>
              {' '}
              <b>Genres:</b>
              {genres.map(genre => genre.name).join(', ')}
            </p>
          )}
        </div>
      )}
      <p>Additional information</p>
      <ul>
        <Link to={`/movies/${id}/cast`}>
          <li>Cast</li>
        </Link>
        <Link to={`/movies/${id}/reviews`}>
          <li>Reviews</li>
        </Link>
      </ul>
      {error && <p>Error{error}</p>}
    </>
  );
}
