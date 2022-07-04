import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Balance from '../../components/Balance/Balance';
import Header from '../../components/Header/Header';
import TransactionsList from '../../components/TransactionsList/TransactionsList';
import { getBalance, getGroups, getTransactions } from '../../controllers/apiRequests';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState({});
  const [groups, setGroups] = useState([]);
  const [groupOptions, setGroupOptions] = useState([]);

  useEffect(() => {
    getGroups(setGroups);
  }, []);

  useEffect(() => {
    const groupList = groups.map((group) => {
      return { value: group.id, label: group.group_title };
    });
    setGroupOptions(groupList);
  }, [groups]);

  useEffect(() => {
    getTransactions(setTransactions);
  }, []);

  useEffect(() => {
    getBalance(setBalance);
  }, []);


  return (
    <>
      <Header />
      <Balance
        totalIncomeAmout={balance.total_income_amount}
        totalOutcomeAmout={balance.total_outcome_amount}
        balance={balance.balance}
      />
      <TransactionsList items={transactions}  groups={groupOptions}/>
    </>
  );
};

export default Transactions;
