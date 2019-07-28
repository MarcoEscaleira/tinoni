import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FooterWrapper,
  InfoWrapper,
  Menu,
  MenuLink,
  Copyright,
  SocialWrapper,
  PhoneWrapper,
  PhoneNumber,
  FacebookLink,
} from './styled-components';
import MenuPages from '../pages';

const Footer = () => {
  return (
    <FooterWrapper>
      <InfoWrapper>
        <Menu>
          {MenuPages.map(page => (
            <MenuLink key={page.path} to={page.path}>
              {page.name}
            </MenuLink>
          ))}
        </Menu>
        <Copyright>
          © {new Date().getFullYear()} TI-NO-NI direitos reservados
        </Copyright>
      </InfoWrapper>
      <SocialWrapper>
        <PhoneWrapper>
          <PhoneNumber href="tel:+351913844344">913 844 344</PhoneNumber>
        </PhoneWrapper>
        <FacebookLink
          href="https://www.facebook.com/tinoniesgotos"
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </FacebookLink>
      </SocialWrapper>
    </FooterWrapper>
  );
};

export default Footer;
