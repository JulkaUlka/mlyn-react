import styled from 'styled-components';
import { Link } from 'react-router-dom';

//gallery-container
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 700px 500px;
  grid-gap: 10px;
  grid-auto-flow: dense;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 250px;
  }
`;

//gallery-item
export const Item = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &:hover .text {
    opacity: 1;
   animation: move-down 0.3s linear;
    padding: 1em;
    width: 90%;
    @keyframes move-down {
      0% {
        top: 10%;
      }
      50% {
        top: 35%;
      }
      100% {
        top: 50%;
      }
    }
  }
  &.w-1 {
    grid-column: span 1;
  }
  &.w-2 {
    grid-column: span 2;
  }
  &.w-3 {
    grid-column: span 3;
  }
  &.w-4 {
    grid-column: span 4;
  }

  @media screen and (max-width: 600px) {
    &.w-2 {
      grid-column: span 1;
    }
    &.w-3 {
      grid-column: span 1;
    }
    &.w-4 {
      grid-column: span 1;
    }
  }
`;
//image
export const LinkStyled = styled(Link)`
  width: 100%;
  height: 100%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
  &:hover img {
    transform: scale(0.9);
  }
`;
export const Text = styled.div`
  text-align: center;
  text-transform: uppercase;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f0eeee;
  font-size: 25px;
  pointer-events: none;
  z-index: 4;
 backdrop-filter: blur(20px) saturate(1.8);
 
`;
