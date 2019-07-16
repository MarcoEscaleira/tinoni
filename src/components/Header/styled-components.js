import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import '../../styles/settings.scss';

const headerDesktopHeight = '7rem';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  width: 100%;
  height: ${headerDesktopHeight};
  box-shadow: 0 5px 10px -6px rgba(0, 0, 0, 0.2);
`;

export const Title = styled(Link).attrs(() => ({
  to: '/',
}))`
  font-family: 'Lato', sans-serif;
  color: #e42024;
  font-weight: 700;
  font-size: 3rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15.2rem;

  &:hover {
    color: #101010;
    & > span {
      color: #e42024;
    }
  }

  & > span {
    font-family: 'Roboto Cn', sans-serif;
    font-weight: 300;
    font-size: 1.8rem;
    text-transform: none;
    align-self: flex-end;
    color: #101010;
    margin-left: 1rem;
    letter-spacing: 0.1rem;
  }

  @media (max-width: 45rem) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const Menu = styled.ul`
  display: flex;
  font-family: 'Lato', sans-serif;
`;

export const MenuLink = styled(Link).attrs(({ to }) => ({
  to,
  activeStyle: {
    borderLeft: '0.4rem solid #e42024',
    paddingLeft: '1rem',
  },
}))`
  color: #090909;
  white-space: nowrap;
  text-decoration: underline;
  letter-spacing: 0.1rem;
  width: 10rem;
  text-align: center;
  line-height: ${headerDesktopHeight};
  height: ${headerDesktopHeight};
  margin-right: 2rem;

  &:last-of-type {
    margin-right: 0;
  }
`;
