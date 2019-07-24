import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import '../../styles/base.scss';

import { Root, MainContainer } from './styled-components';
import Header from '../Header';
import Footer from '../Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAlignJustify,
  faTimes,
  faPhone,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

library.add(faAlignJustify, faTimes, faFacebook, faPhone, faClock, faCalendar);

const Layout = ({ children }) => (
  <Root>
    <MainContainer>
      <Header />
      <main>{children}</main>
    </MainContainer>
    <Footer />
  </Root>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
