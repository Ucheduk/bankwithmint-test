import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';

const SearchInput = ({
  id, className, placeholder, value, handleChange,
}) => {
  return (
    <div className={className}>
      <SearchIcon fontSize="medium" />
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

SearchInput.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default SearchInput;
