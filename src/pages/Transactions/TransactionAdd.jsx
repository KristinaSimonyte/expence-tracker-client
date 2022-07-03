import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import { addTransaction, getGroups } from '../../controllers/apiRequests';
import * as S from './TransactionAdd.style';

const TransactionAdd = () => {
  const navigationHandler = useNavigate();

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
    console.log(groups);
    if (groups.length>0) {
    const groupList = groups.map((group) => {
      return { value: group.id, label: group.group_title };
    });
    setGroupOptions(groupList);}
  }, [groups]);

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
  };

  return (
    <>
      <Header />
      <h1>Išlaidų/Pajamų įvedimas</h1>
      <TransactionForm
        transaction={{}}
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

export default TransactionAdd;
