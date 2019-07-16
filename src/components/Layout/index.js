import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';

import Header from '../Header';

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <div className="home">
      <main>{children}</main>
      <footer>An awesome footer</footer>
    </div>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
