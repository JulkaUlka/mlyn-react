
import { MovieItem, LinkStyled,Image, Title } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TheMovieDbAPI } from 'components/helpers/api';



export function MoviesList({ id, title,poster_path }) {
    const location = useLocation();
  return (
    <MovieItem key={id}>
      <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
        <Image src={`${TheMovieDbAPI.IMG_URL + poster_path}`} alt={title} />        
        <Title>{title}</Title>
      </LinkStyled>
    </MovieItem>
  );
}


MoviesList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};