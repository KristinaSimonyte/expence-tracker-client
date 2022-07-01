import React from 'react';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';


const Transactions = () => {
  return (
    <>
      <Hero title='Transactions' />
      <Section>
        <p className='info'>
          Will be information about added transactions
        </p>
      </Section>
    </>
  );
};

export default Transactions;
