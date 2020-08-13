const getValue = (data) => {
  const values = data.map((i) => {
    return Number(i.price.slice(1));
  });
  let total = values.reduce((sum, i) => {
    sum += i;
    return sum;
  }, 0);
  total = total.toFixed(2);
  return { values, total };
};

const getDailyTransactions = (data) => {
  const today = new Date();
  const months = data.filter((i) => {
    const date = new Date(Number(i.date) * 1000);
    return date.getMonth() === today.getMonth()
      && date.getDate() === today.getDate()
      && date.getFullYear() === today.getFullYear();
  });
  const volume = months.length;
  const { values, total } = getValue(months);
  return { values, total, volume };
};

const getTotalTransactions = (data) => {
  const volume = data.length;
  const { values, total } = getValue(data);
  return { values, total, volume };
};

export default { getDailyTransactions, getTotalTransactions };
