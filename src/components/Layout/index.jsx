import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import '../../styles/base.scss';

import { Root, MainContainer } from './styled-components';
import Header from '../Header';

const Layout = ({ children }) => (
  <Root>
    <MainContainer>
      <Header />
      <main>{children}</main>
    </MainContainer>
    <footer>An awesome footer</footer>
  </Root>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
