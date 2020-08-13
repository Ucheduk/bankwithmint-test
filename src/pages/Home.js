import React from 'react';
import Layout from '<components>/layout/Layout';
import PaymentTable from '<components>/widgets/PaymentTable';
import paymentTransactions from '<helpers>/paymentTransactions';

const Home = () => {
  return (
    <Layout>
      <div className="home-section">
        <PaymentTable
          className="home-section__payment-table"
          data={paymentTransactions}
        />
      </div>
    </Layout>
  );
};

export default Home;
