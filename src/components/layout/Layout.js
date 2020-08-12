import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import SideNav from './SideNav';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-section">
        <SideNav />
        {children}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
