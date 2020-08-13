const changePage = (
  data,
  page = 0,
  prev = false,
  lastIndex = 0,
  firstIndex = 0,
  recordsPerPage = 10,
) => {
  let slicedData;

  if (!prev) {
    page += 1;
    if (lastIndex) firstIndex = lastIndex + 1;
    if (data.length <= firstIndex + recordsPerPage) lastIndex = data.length;
    else lastIndex = firstIndex + recordsPerPage;
  }

  if (prev) {
    page -= 1;
    lastIndex = firstIndex;
    if (firstIndex - recordsPerPage < 0) firstIndex = 0;
    else firstIndex -= recordsPerPage;
  }

  if (data.length <= recordsPerPage) slicedData = [...data];
  else slicedData = data.slice(firstIndex, lastIndex);

  return {
    slicedData,
    page,
    firstIndex,
    lastIndex,
  };
};

const searchInArray = (_incomingArray, _queryObj, _filtrationFields = []) => {
  const result = [];
  let resultBuffer = [];
  const indexes = [];
  let firstIndexes = [];
  let doSearch = false;

  _filtrationFields.forEach((item) => {
    if (item in _queryObj) {
      _incomingArray.forEach((element, index) => {
        if (element[item] === _queryObj[item]) {
          firstIndexes.push(index);
        }
      });
      firstIndexes.forEach((element) => {
        resultBuffer.push(_incomingArray[element]);
      });
      _incomingArray = resultBuffer.slice(0);
      resultBuffer = [].slice(0);
      firstIndexes = [].slice(0);
    }
  });

  Object.keys(_queryObj).forEach((key) => {
    const searchText = _queryObj[key]
      .toString()
      .trim()
      .toLowerCase();
    if (key && !_filtrationFields.some((e) => e === key) && searchText) {
      doSearch = true;
      try {
        _incomingArray.forEach((element, index) => {
          if (element[key]
            || (element[key] === false && searchText === 'false')) {
            const value = element[key]
              .toString()
              .trim()
              .toLowerCase();
            if (
              value.indexOf(searchText) > -1
              && indexes.indexOf(index) === -1
            ) {
              indexes.push(index);
            }
          }
        });
      } catch (ex) {
        console.log(ex, key, searchText);
      }
    }
  });

  if (!doSearch) {
    return _incomingArray;
  }

  indexes.forEach((re) => {
    result.push(_incomingArray[re]);
  });

  return result;
};

const baseFilter = (_entities, _filter, _filtrationFields = []) => {
  // Filtration
  const result = searchInArray(
    _entities,
    _filter,
    _filtrationFields,
  );

  return { result, length: result.length };
};

const searchPage = (data, searchValue, filterValue) => {
  const filter = {
    itemType: searchValue,
  };

  filterValue !== 'all' ? filter.status = filterValue : '';
  return baseFilter(data, filter);
};

export default { changePage, searchPage };
