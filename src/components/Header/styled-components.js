import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import '../../styles/settings.scss';

const headerDesktopHeight = '7rem';
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

  @media (min-width: 45rem) {
    height: ${headerDesktopHeight};
  }
`;

export const Title = styled(Link).attrs(() => ({
  to: '/',
}))`
  font-family: 'Lato', sans-serif;
  color: #e42024;
  font-weight: 700;
  font-size: 2.1rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 12rem;

  &:hover {
    color: #101010;
    & > span {
      color: #e42024;
    }
  }

  & > span {
    font-family: 'Roboto Cn', sans-serif;
    font-weight: 300;
    font-size: 1.3rem;
    text-transform: none;
    align-self: flex-end;
    color: #101010;
    margin-left: 1rem;
    letter-spacing: 0.1rem;
  }

  @media (min-width: 45rem) {
    font-size: 3rem;
    min-width: 16.8rem;

    & > span {
      font-size: 1.8rem;
    }
  }
`;

export const Navigation = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const ShowMenu = styled.button`
  ${responsiveButtonStyles};

  &:hover {
    color: #e42024;
  }

  @media (min-width: 45rem) {
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
    color: #e42024;
  }

  @media (min-width: 45rem) {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: flex;
  font-family: 'Lato', sans-serif;

  @media (max-width: 45rem) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #999;
    right: ${({ responsive }) => (responsive ? '0' : '-100%')};
    top: 0;
    transition: 0.7s;
  }
`;

export const MenuLink = styled(Link).attrs(({ to }) => ({
  to,
  activeStyle: {
    borderLeft: '0.3rem solid #e42024',
    paddingLeft: '1rem',
  },
}))`
  color: #fff;
  white-space: nowrap;
  text-decoration: underline;
  letter-spacing: 0.1rem;
  width: 11rem;
  text-align: center;
  line-height: ${headerDesktopHeight};
  height: ${headerDesktopHeight};
  margin-right: 2rem;

  &:last-of-type {
    margin-right: 0;
  }

  @media (min-width: 45rem) {
    color: #090909;
  }
`;
