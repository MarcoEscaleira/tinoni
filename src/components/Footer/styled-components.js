import styled from 'styled-components';
import { Link } from 'gatsby';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  @media (min-width: 45rem) {
    flex-direction: row;
    height: 10rem;
    padding: 0 4rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-family: 'Lato', sans-serif;
  font-size: 1.3rem;
`;

export const Menu = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  padding: 0.5rem 0;
  width: 100%;
  flex-flow: row wrap;
  list-style: none;
  justify-content: space-evenly;

  @media (min-width: 45rem) {
    padding: 2rem 0 0;
  }
`;

export const MenuLink = styled(Link).attrs(({ to }) => ({
  to,
}))`
  color: #fe5000;
  font-size: 1.1rem;
  text-transform: uppercase;

  &:hover {
    color: #54585a;
  }
`;

export const Copyright = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  font-family: 'Roboto Cn', Arial, sans-serif;
  font-weight: lighter;
  font-size: 1rem;
  color: #54585a;
`;

export const SocialWrapper = styled.div`
  flex: 1;
  font-size: 3rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const PhoneWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding-left: 30px;
`;

export const PhoneNumber = styled.a.attrs(({ href }) => ({
  href,
}))`
  color: #fe5000;
  font-family: 'Lato', sans-serif;
  font-weight: lighter;
  font-size: 1.6rem;

  &::before {
    content: 'Ligue já para';
    font-size: 1.4rem;
    padding-right: 0.5rem;
    color: #54585a;
  }
`;

export const FacebookLink = styled.a.attrs(() => ({
  href: 'https://www.facebook.com/tinoniesgotos',
  target: '_blank',
}))`
  cursor: pointer;
  color: #54585a;

  &:hover {
    color: #3b5998;
  }
`;
