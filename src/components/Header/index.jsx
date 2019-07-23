import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoPath from '../../images/logo.png';
import TopMessage from '../TopMessage';

import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  Navigation,
  ShowMenu,
  HideMenu,
  Menu,
  MenuLink,
} from './styled-components';
import MenuPages from '../pages';

const Header = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <Fragment>
      <TopMessage />
      <HeaderWrapper>
        <LogoWrapper>
          <Logo src={logoPath} />
        </LogoWrapper>
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
          <ShowMenu onClick={() => setResponsive(true)}>
            <FontAwesomeIcon icon="align-justify" />
          </ShowMenu>
        </Navigation>
      </HeaderWrapper>
    </Fragment>
  );
};

export default Header;
