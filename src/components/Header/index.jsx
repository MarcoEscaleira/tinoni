import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeaderWrapper, Title, Navigation, Menu, MenuLink } from './styled-components';

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const title = data.site.siteMetadata.title.split(" ");

  return (
    <HeaderWrapper>
      <Title>{title[0]}<span>{title[1]}</span></Title>
      <Navigation>
        <Menu>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/services">Serviços</MenuLink>
          <MenuLink to="/whereWeAre">Onde estamos</MenuLink>
          <MenuLink to="/contacts">Contactos</MenuLink>
        </Menu>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
