import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import '../../styles/settings.scss';

const headerDesktopHeight = '6rem';
const headerMobileHeight = '5rem';

const responsiveButtonStyles = css`
  background-color: transparent;
  border: none;
  transition: 0.4s;
  font-size: 30px;
  align-items: center;
  cursor: pointer;
  display: flex;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  width: 100%;
  height: ${headerMobileHeight};
  box-shadow: 0 5px 10px -6px rgba(0, 0, 0, 0.2);

  @media (min-width: 52rem) {
    height: ${headerDesktopHeight};
  }
`;

export const LogoWrapper = styled(AniLink).attrs(() => ({
  paintDrip: true,
  hex: '#fe5000',
  to: '/',
}))`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 52rem) {
    flex: 1;
    padding-left: 2.6rem;
  }
`;

export const Logo = styled.img.attrs(({ src }) => ({
  src,
}))`
  width: 5.4rem;
  height: 4.6rem;

  @media (min-width: 52rem) {
    width: 6rem;
    height: 5.6rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;

  @media (min-width: 52rem) {
    flex: 1;
  }
`;

export const ShowMenu = styled.button`
  ${responsiveButtonStyles};
  color: #54585a;

  &:hover {
    color: #fe5000;
  }

  @media (min-width: 52rem) {
    display: none;
  }
`;

export const HideMenu = styled.button`
  ${responsiveButtonStyles};
  color: #fff;
  position: absolute;
  top: 2rem;
  right: 2rem;

  &:hover {
    color: #fe5000;
  }

  @media (min-width: 52rem) {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: flex;
  max-width: 70rem;
  flex: 1;
  justify-content: space-evenly;
  font-family: 'Lato', sans-serif;

  @media (max-width: 52rem) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20rem 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #54585a;
    right: ${({ responsive }) => (responsive ? '0' : '-100%')};
    top: 0;
    transition: 0.7s;
  }
`;

export const MenuLink = styled(Link).attrs(({ to }) => ({
  to,
  activeStyle: {
    borderBottom: '0.3rem solid #FE5000',
  },
}))`
  color: #fff;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  flex: 1;
  display: flex;
  align-items: flex-end;
  padding-bottom: 1rem;
  text-align: center;

  &:hover {
    color: #fe5000;
  }

  @media (min-width: 52rem) {
    color: #090909;
    padding-bottom: 0;
    justify-content: center;
    align-items: center;
  }
`;
