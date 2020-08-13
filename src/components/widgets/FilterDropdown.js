import React from 'react';
import PropTypes from 'prop-types';

const FilterDropdown = ({ className, text, options, handleChange }) => {
  return (
    <div className={className}>
      <p>{text}</p>
      <select
        onChange={handleChange}
      >
        <option value='all'>All</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </div>
  );
};

FilterDropdown.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  options: PropTypes.array,
  handleChange: PropTypes.func,
};

export default FilterDropdown;
