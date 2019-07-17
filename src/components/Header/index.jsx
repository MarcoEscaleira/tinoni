import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faTimes } from '@fortawesome/free-solid-svg-icons';
import { HeaderWrapper, Title, Navigation, MenuCheckbox, ShowMenu, HideMenu, Menu, MenuLink } from './styled-components';

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  
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
        <Menu responsive={responsive}>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/services">Serviços</MenuLink>
          <MenuLink to="/whereWeAre">Onde estamos</MenuLink>
          <MenuLink to="/contacts">Contactos</MenuLink>
          <HideMenu onClick={() => setResponsive(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </HideMenu>
        </Menu>
        <ShowMenu onClick={() => setResponsive(true)}>
          <FontAwesomeIcon icon={faAlignJustify} />
        </ShowMenu>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
