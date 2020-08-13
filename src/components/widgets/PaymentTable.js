import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import FilterDropdown from './FilterDropdown';

const PaymentTable = ({ className, data }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    console.log(text);
  };

  return (
    <div className={className}>
      <h2>Payments</h2>
      <div className="table-top">
        <SearchInput
          id="table-top-search"
          className="table-top__search"
          placeholder="Search payment..."
          value={searchText}
          handleChange={handleChange}
        />
        <FilterDropdown
          className="table-top__filter"
          text="Show"
        />
      </div>
      <table className="table-main">
        <thead className="table-main__thead">
          <tr className="table-main_tr">
            <th>Item Type</th>
            <th>Price</th>
            <th>Transaction No</th>
            <th>Time</th>
            <th/>
          </tr>
        </thead>
        <tbody className="table-main__tbody">
          <tr className="table-main_tr">
            <td>nibh vulputate mauris sagittis placerat. Cras</td>
            <td>$79.02</td>
            <td>Reconcilled</td>
            <td>1579451071</td>
            <td>Button</td>
          </tr>
        </tbody>
      </table>
      <div className="table-footer">
        <span className="page-entries">
          Showing 1 to 10 of 500 entries
        </span>
        <div className="btn-group">
          <button type="button" className="btn-ctl btn-prev" id="btn-prev">
            Previous
          </button>
          <button type="button" className="btn-ctl btn-num1" id="btn-num1">
            1
          </button>
          <button type="button" className="btn-ctl btn-num2" id="btn-num2">
            2
          </button>
          <button type="button" className="btn-ctl btn-next" id="btn-next">
              Next
          </button>
        </div>
      </div>
    </div>
  );
};

PaymentTable.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
};

export default PaymentTable;
