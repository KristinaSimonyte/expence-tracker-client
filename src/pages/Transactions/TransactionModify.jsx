import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import {
  getGroups,
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
        transaction={{ id, amount, transactionDate, comment, groupId }}
        groupOptions={groupOptions}
        setAmount={setAmount}
        setComment={setComment}
        setGroupId={setGroupId}
        setTransactionDate={setTransactionDate}
      />
      <S.Button onClick={saveTransactionHandle}>Išsaugoti</S.Button>
    </>
  );
};

export default TransactionModify;
