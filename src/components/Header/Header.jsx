
import logo from '../../images/logo.png';
import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';
import { Container } from 'components/App.styled';
import { Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <NavLinkStyled to="/">
              {<img src={logo} alt="logo" width="50px" />}
            </NavLinkStyled>
            <LinkWrapper>
              <NavLinkStyled to="/">Home</NavLinkStyled>
              <NavLinkStyled to="/about">Who we are</NavLinkStyled>
              <NavLinkStyled to="/works">What we do</NavLinkStyled>
              <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>
      <Outlet />
    </>
  );
};
