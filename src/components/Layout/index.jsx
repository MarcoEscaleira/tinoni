import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import '../../styles/base.scss';

import { Root, MainContainer, Content } from './styled-components';
import Header from '../Header';
import Footer from '../Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAlignJustify,
  faTimes,
  faPhone,
  faClock,
  faChevronLeft,
  faChevronRight,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

library.add(
  faAlignJustify,
  faTimes,
  faFacebook,
  faPhone,
  faClock,
  faCalendar,
  faChevronLeft,
  faChevronRight,
  faPaperPlane
);

const Layout = ({ children }) => (
  <Root>
    <MainContainer>
      <Header />
      <Content>{children}</Content>
    </MainContainer>
    <Footer />
  </Root>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
