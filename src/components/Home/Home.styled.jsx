import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding: 10px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieItem = styled.li`
  margin-top: 0;
  margin-bottom: 0;
  padding: 10px;  
  margin-left: auto;
  margin-right: auto;
`;

export const LinkStyled = styled(Link)`
color: black;
`;
