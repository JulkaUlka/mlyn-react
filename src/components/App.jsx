import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./Home/Home";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Movies } from "./Movies/Movies";




const StyledLink = styled(NavLink)`
  color: black;
padding: 10px;


  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>       
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} /> 
         <Route path="/movies/:moviesId" element={<MovieDetails />} />   
      </Routes>
    </div>
  );
};