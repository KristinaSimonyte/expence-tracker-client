import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header.style';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import {
  getTransaction,
  modifyTransaction,
} from '../../controllers/apiRequests';
import * as S from './TransactionModify.style';
const TransactionModify = () => {
  const { id } = useParams();
  const navigationHandler = useNavigate();

  const [transactionData, setTransactionData] = useState([]);
  const [transactionDate, setTransactionDate] = useState('');
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');
  const [groupId, setGroupId] = useState('');

  
  useEffect(() => {
    getTransaction(id, setTransactionData);
  }, [id]);

  useEffect(() => {
    setTransactionDate(
      new Date(transactionData?.transaction_date).toLocaleDateString('en-CA') ||
        ''
    );
    setAmount(transactionData?.amount);
    setComment(transactionData?.comment);
    setGroupId(transactionData?.group_id);
  }, [transactionData]);

  const saveTransactionHandle = async (event) => {
    event.preventDefault();
    const resp = await modifyTransaction({
      id,
      groupId,
      transactionDate,
      amount,
      comment,
    });
    if (resp.success === true) {
      navigationHandler('/transactions');
    }
  };

  return (
    <>
      <Header />
      <h1>Modify transaction form</h1>
      <TransactionForm
        transaction={{id, amount, transactionDate, comment, groupId}}
        setAmount={setAmount}
        setComment={setComment}
        setGroupId={setGroupId}
        setTransactionDate={setTransactionDate}
      />
      <S.Button onClick={saveTransactionHandle}>Save</S.Button>
    </>
  );
};

export default TransactionModify;
