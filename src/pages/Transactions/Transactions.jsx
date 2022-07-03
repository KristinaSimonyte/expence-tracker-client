import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import TransactionsList from '../../components/TransactionsList/TransactionsList';
import { getTransactions } from '../../controllers/apiRequests';


const Transactions = () => {
    const [transactions , setTransactions] = useState([]);
    useEffect(()=>{
      getTransactions(setTransactions);
    },[]);
  return (
    <>
      <Header />
      <TransactionsList items = {transactions} />
    </>
  );
};

export default Transactions;
