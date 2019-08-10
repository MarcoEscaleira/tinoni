import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const headerDesktopHeight = '27rem';
const headerMobileHeight = '17rem';

const responsiveButtonStyles = css`
  background-color: transparent;
  border: none;
  transition: 0.4s;
  font-size: 3rem;
  align-items: center;
  cursor: pointer;
  display: flex;
`;

export const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  flex-basis: ${headerMobileHeight};
  height: ${headerMobileHeight};
  box-shadow: 0 5px 10px -6px rgba(0, 0, 0, 0.2);

  @media (min-width: 52rem) {
    flex-basis: ${headerDesktopHeight};
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 52rem) {
    flex: 1;
  }
`;

export const LogoLink = styled(AniLink).attrs(() => ({
  paintDrip: true,
  hex: '#fe5000',
}))`
  outline: none;
`;

export const Logo = styled.img`
  /* width: 12.8rem;
  height: 11.2rem;
  margin: 1rem 0; */
  width: 28rem;
  height: 11rem;

  @media (min-width: 52rem) {
    /* width: 12rem;
    height: 11.2rem; */
    padding-top: 1rem;
    width: 46rem;
    height: 16rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;

  @media (min-width: 52rem) {
    flex: 1;
  }
`;

export const ShowMenu = styled.button`
  ${responsiveButtonStyles};
  color: #54585a;
  position: absolute;
  top: 1rem;
  right: 1.3rem;

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
  flex: 1;
  max-width: 100rem;
  justify-content: space-evenly;
  font-family: 'Lato', sans-serif;

  @media (max-width: 52rem) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20rem 0;
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: #54585a;
    right: ${({ responsive }) => (responsive ? '0' : '-100%')};
    top: 0;
    transition: 0.7s;
  }
`;

export const MenuLink = styled(Link).attrs(() => ({
  activeStyle: {
    borderBottom: '0.3rem solid #FE5000',
  },
}))`
  color: #fff;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  flex: 1;
  min-height: 5rem;
  max-height: 6rem;
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
