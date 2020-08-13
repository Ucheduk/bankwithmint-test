import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import FilterDropdown from './FilterDropdown';
import tableActions from '<helpers>/tableActions';

const PaymentTable = ({ className, data, options }) => {
  const [searchText, setSearchText] = useState('');
  const [pageNo, setPageNo] = useState();
  const [firstIndexNo, setFirstIndexNo] = useState();
  const [lastIndexNo, setLastIndexNo] = useState();
  const [filteredOption, setFilteredOption] = useState('all');
  const [filteredData, setFilteredData] = useState([]);
  const [entries, setEntries] = useState(0);
  const [paymentData, setPaymentData] = useState([]);

  const { changePage, searchPage } = tableActions;

  useEffect(() => {
    const {
      result,
      length,
    } = searchPage(data, searchText, filteredOption);
    setFilteredData(result);
    setEntries(length);

    const {
      slicedData,
      page,
      firstIndex,
      lastIndex,
    } = changePage(result);
    setPaymentData(slicedData);
    setPageNo(page);
    setFirstIndexNo(firstIndex);
    setLastIndexNo(lastIndex);
  }, [searchText, filteredOption]);

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleFilter = (e) => {
    const option = e.target.value;
    setFilteredOption(option);
  };

  const prevPage = () => {
    if (pageNo > 1) {
      const {
        slicedData,
        page,
        firstIndex,
        lastIndex,
      } = changePage(filteredData, pageNo, true, lastIndexNo, firstIndexNo);
      setPaymentData(slicedData);
      setPageNo(page);
      setFirstIndexNo(firstIndex);
      setLastIndexNo(lastIndex);
    }
  };

  const nextPage = () => {
    if (entries > lastIndexNo) {
      const {
        slicedData,
        page,
        firstIndex,
        lastIndex,
      } = changePage(filteredData, pageNo, false, (lastIndexNo - 1));
      setPageNo(page);
      setFirstIndexNo(firstIndex);
      setLastIndexNo(lastIndex);
      setPaymentData(slicedData);
    }
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
          handleChange={handleSearch}
        />
        <FilterDropdown
          className="table-top__filter"
          text="Show"
          options={options}
          handleChange={handleFilter}
        />
      </div>
      <table className="table-main">
        <thead className="table-main__thead">
          <tr>
            <th>Item Type</th>
            <th>Price</th>
            <th>Transaction No</th>
            <th>Time</th>
            <th/>
          </tr>
        </thead>
        <tbody className="table-main__tbody">
          {paymentData.map((item) => (
            <tr key={item.date}>
              <td>{item.itemType}</td>
              <td>{item.price}</td>
              <td>{item.date}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        {entries === 0
          ? <span className="page-entries">
            No record found
          </span>
          : <span className="page-entries">
            Showing {firstIndexNo + 1} to {lastIndexNo} of {entries} entries
          </span>
        }
        <div className="btn-group">
          <button
            type="button"
            className="btn-ctl btn-prev"
            id="btn-prev"
            onClick={prevPage}
          >
            Previous
          </button>
          <button type="button" className="btn-ctl btn-num1" id="btn-num1">
            {pageNo}
          </button>
          <button
            type="button"
            className="btn-ctl btn-num2"
            id="btn-num2"
            onClick={nextPage}
          >
            {pageNo + 1}
          </button>
          <button
            type="button"
            className="btn-ctl btn-next"
            id="btn-next"
            onClick={nextPage}
          >
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
  options: PropTypes.array,
};

export default PaymentTable;
