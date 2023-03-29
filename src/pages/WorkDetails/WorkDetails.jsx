// import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import {
  Block,
  Image,
  InfoBlock,
  
} from './WorkDetails.styled';
import { photo } from 'components/helpers/photo';

function WorkDetails() {
  const { '*' : photoIndex } = useParams();

const selectedPhoto = photo[photoIndex-1];
  const {  src, title, location, visualization, architecture, made, img } =
    selectedPhoto;

  return (
    <>
      { selectedPhoto && (
        <Block>
          {src ? <Image src={src} alt={title} /> : <Loader />}
          <InfoBlock>
            <h2>{title}</h2>
            <p>{location}</p>
            <p>
              <b>Visualization: </b>
              {visualization}
            </p>
            <p>
              <b>Architecture: </b>
              {architecture}
            </p>
            <p>
              <b>Made for: </b>
              {made}
            </p>
          </InfoBlock>
        </Block>
      )}
     

      <ul>
        {img.map((path)=> (<li key={path}><img src={path} alt={title} width="250" /></li>))}
      </ul>
    </>
  );
}

export default WorkDetails;
