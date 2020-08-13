import React from 'react';
import PropTypes from 'prop-types';

const FilterDropdown = ({ className, text, options }) => {
  return (
    <div className={className}>
      <p>{text}</p>
      <select>
        <option>All</option>
        <option>Reconcilled</option>
      </select>
    </div>
  );
};

FilterDropdown.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  options: PropTypes.array,
};

export default FilterDropdown;
