import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import SideNav from './SideNav';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SideNav />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
