// import { useState, useEffect } from 'react';

// import { useParams,  useLocation } from 'react-router-dom';

// import { Loader } from 'components/Loader/Loader';
// import {
//   Block,
//   Image,
//   InfoBlock,
//   Title,
//   LinkStyled,
//   NavLinkStyled,
// } from './WorkDetails.styled';




function WorkDetails() {
  

  // const { poster_path, title, vote_average, genres, overview } = movie;

  return (
    <>
    <h1>hello from details</h1>
      {/* <LinkStyled to={goBackLink}>Go back</LinkStyled>
      {movie && (
        <Block>
          {poster_path ? (
            <Image src={`${TheMovieDbAPI.IMG_URL + poster_path}`} alt={title} />
          ) : (
            <Loader />
          )}
          <InfoBlock>
            <h1>{title}</h1>
            <p>User score: {Math.round(vote_average * 10)} %</p>
            <p>
              <b>Overview: </b>
              {overview}
            </p>
            {genres && (
              <p>
                <b>Genres: </b>
                {genres.map(genre => genre.name).join(', ')}
              </p>
            )}
          </InfoBlock>
        </Block>
      )}
      {error && <p>Error{error}</p>}
      <Title>Additional information</Title>
      <ul>
        <li>
          <NavLinkStyled
            to={`cast`}
            state={{ from: location?.state?.from ?? '/' }}
          >
            Cast
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to={`reviews`}
            state={{ from: location?.state?.from ?? '/' }}
          >
            Reviews
          </NavLinkStyled>
        </li>
      </ul> */}

     
    </>
  );
}


export default WorkDetails;
