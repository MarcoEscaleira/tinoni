import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  HeaderWrapper,
  Title,
  Navigation,
  ShowMenu,
  HideMenu,
  Menu,
  MenuLink,
} from './styled-components';
import MenuPages from '../pages';

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
  const title = data.site.siteMetadata.title.split(' ');

  return (
    <HeaderWrapper>
      <Title>
        {title[0]}
        <span>{title[1]}</span>
      </Title>
      <Navigation>
        <Menu responsive={responsive}>
          {MenuPages.map(page => (
            <MenuLink key={page.path} to={page.path}>{page.name}</MenuLink>
          ))}
          <HideMenu onClick={() => setResponsive(false)}>
            <FontAwesomeIcon icon="times" />
          </HideMenu>
        </Menu>
        <ShowMenu onClick={() => setResponsive(true)}>
          <FontAwesomeIcon icon="align-justify" />
        </ShowMenu>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
