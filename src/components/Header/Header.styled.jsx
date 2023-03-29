import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #ffffff;
`;

export const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const NavLinkStyled = styled(NavLink)`
  color: black;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  &:hover,
  &:focus {
    color: orange;
  }

  &.active {
    color: orange;
    padding: 6px 12px;
    border-radius: 4px;
    pointer-events: none;
    text-decoration: underline;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-left: 10px;
`;
