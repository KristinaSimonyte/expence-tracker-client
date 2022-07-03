import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Balance from '../../components/Balance/Balance';
import Header from '../../components/Header/Header';
import TransactionsList from '../../components/TransactionsList/TransactionsList';
import { getBalance, getTransactions } from '../../controllers/apiRequests';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState({});
  useEffect(() => {
    getTransactions(setTransactions);
  }, []);

  useEffect(() => {
    getBalance(setBalance);
  }, []);

  console.log(balance);
  return (
    <>
      <Header />
      <Balance
        totalIncomeAmout={balance.total_income_amount}
        totalOutcomeAmout={balance.total_outcome_amount}
        balance={balance.balance}
      />
      <TransactionsList items={transactions} />
    </>
  );
};

export default Transactions;
