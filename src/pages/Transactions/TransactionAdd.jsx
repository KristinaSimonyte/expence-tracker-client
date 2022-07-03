import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header.style';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import { addTransaction } from '../../controllers/apiRequests';
import * as S from './TransactionAdd.style';

const TransactionAdd = () => {

    const navigationHandler = useNavigate();

    const [transactionDate, setTransactionDate] = useState('');
    const [amount, setAmount] = useState('');
    const [comment, setComment] = useState('');
    const [groupId, setGroupId] = useState('');


  const saveTransactionHandle = async (event) => {
    
    event.preventDefault();
    const resp = await addTransaction({
       groupId,
      transactionDate,
      amount,
      comment,
    });
    if (resp.success === true) {
        navigationHandler('/transactions');
    }
  }

    return (
        <>
         <Header />
        <h1>add transaction form</h1>
        <TransactionForm transaction={{}}
        setAmount={setAmount}
        setComment={setComment}
        setGroupId={setGroupId}
        setTransactionDate={setTransactionDate}/>
        <S.Button onClick={saveTransactionHandle}>Save</S.Button>
        </>
    );
}

export default TransactionAdd;