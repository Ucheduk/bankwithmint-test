import React from 'react';
import Layout from '<components>/layout/Layout';
import StatsCard from '<components>/widgets/StatsCard';
import PaymentTable from '<components>/widgets/PaymentTable';
import paymentTransactions from '<helpers>/paymentTransactions';
import statsSelector from '<helpers>/statsSelector';

const Home = () => {
  const { transactions, options } = paymentTransactions;
  const { getDailyTransactions, getTotalTransactions } = statsSelector;
  const { dailyValues, dailyTotal, dailyVolume } = getDailyTransactions(transactions);
  const { values, total, volume } = getTotalTransactions(transactions);
  return (
    <Layout>
      <div className="home-section">

        <div className="home-section__stats">
          <StatsCard
            className="stats-card"
            text="Daily Transaction Volume"
            value={dailyVolume || '0'}
            stats={dailyValues}
          />
          <StatsCard
            className="stats-card"
            text="Daily Transaction Value"
            value={dailyTotal ? `$${dailyTotal}` : '$0.00'}
            stats={dailyValues}
          />
          <StatsCard
            className="stats-card"
            text="Total Transaction Volume"
            value={volume || '0'}
            stats={values}
          />
          <StatsCard
            className="stats-card"
            text="Total Transaction Value"
            value={total ? `$${total}` : '$0.00'}
            stats={values}
          />
        </div>

        <PaymentTable
          className="home-section__payment-table"
          data={transactions}
          options={options}
        />
      </div>
    </Layout>
  );
};

export default Home;
