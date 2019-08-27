import React, { Fragment, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopMessage from '../TopMessage';

import {
  HeaderWrapper,
  LogoWrapper,
  LogoLink,
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
    query {
      logoDesktop: file(relativePath: { eq: "logoFlat.png" }) {
        childImageSharp {
          fixed(width: 460, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoMobile: file(relativePath: { eq: "logoFlat.png" }) {
        childImageSharp {
          fixed(width: 325, height: 115) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Fragment>
      <HeaderWrapper>
        <LogoWrapper>
          <LogoLink to="/">
            <Img
              fixed={
                window.innerWidth <= 760
                  ? data.logoMobile.childImageSharp.fixed
                  : data.logoDesktop.childImageSharp.fixed
              }
            />
          </LogoLink>
        </LogoWrapper>
        <TopMessage />
        <ShowMenu onClick={() => setResponsive(true)}>
          <FontAwesomeIcon icon="align-justify" />
        </ShowMenu>
        <Navigation>
          <Menu responsive={responsive}>
            {MenuPages.map(page => (
              <MenuLink key={page.path} to={page.path}>
                {page.name}
              </MenuLink>
            ))}
            <HideMenu onClick={() => setResponsive(false)}>
              <FontAwesomeIcon icon="times" />
            </HideMenu>
          </Menu>
        </Navigation>
      </HeaderWrapper>
    </Fragment>
  );
};

export default Header;
