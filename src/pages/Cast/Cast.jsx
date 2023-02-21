import { useState, useEffect } from 'react';
import { TheMovieDbAPI } from 'components/helpers/api';
import { useParams } from 'react-router-dom';
import { Title, CastList, CastItem, Block, Image, Text } from './Cast.styled';
import PropTypes from 'prop-types';

const theMovieDbAPI = new TheMovieDbAPI();

export function Cast() {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getCast = async () => {
      try {
        const { data } = await theMovieDbAPI.getCastInfo(moviesId);

        if (data.cast.length === 0) {
          setError('Oooops! There is no cast info');
        } else {
          setCast(data.cast);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    getCast();
  }, [moviesId]);

  return (
    <Block>
      <Title>Cast</Title>
      <CastList>
        {cast.slice(0, 10).map(cast => (
          <CastItem key={cast.id}>
            <Image
              src={`${TheMovieDbAPI.IMG_URL + cast.profile_path}`}
              alt={cast.name}
            />
            <h4>{cast.name}</h4>
            <Text>Character: {cast.character}</Text>
          </CastItem>
        ))}
      </CastList>
      {error && <p>{error}</p>}
    </Block>
  );
}
Cast.propTypes = {
  moviesId: PropTypes.number,
};
