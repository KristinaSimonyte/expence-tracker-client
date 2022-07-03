import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import TransactionsList from '../../components/TransactionsList/TransactionsList';
import { getTransactions } from '../../controllers/apiRequests';


const Transactions = () => {
    const [transactions , setTransactions] = useState([]);
    useEffect(()=>{
      getTransactions(setTransactions);
    },[]);
  return (
    <>
      <Header title='Transactions' />
      <Section>
        <p className='info'>
          Will be information about added transactions
         
        </p>        
      </Section>
      <TransactionsList items = {transactions} />
    </>
  );
};

export default Transactions;
