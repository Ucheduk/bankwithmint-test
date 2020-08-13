import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, className, children }) => {
  return (
    <button className={className}>
      {children}
      {text}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
