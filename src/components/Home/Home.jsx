import { useState, useEffect } from 'react';
import { TheMovieDbAPI } from 'components/helpers/api';
import { MovieList, MovieItem, LinkStyled } from './Home.styled';


const theMovieDbAPI = new TheMovieDbAPI();

export function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await theMovieDbAPI.getPopularFilms();

        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <MovieList>
        {movies.map(({ id, title }) => (
          <MovieItem key={id}>
            <LinkStyled to={`/movies/${id}`}>
              <h3>{title}</h3>
            </LinkStyled>
          </MovieItem>
        ))}
      </MovieList>
      {error && <p>Error{error}</p>}
    </>
  );
}
