import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import { addTransaction, getGroups } from '../../controllers/apiRequests';
import * as S from './TransactionAdd.style';
import Notification from '../../components/Notification/Notification';

const TransactionAdd = () => {
  const navigationHandler = useNavigate();

  const [transactionDate, setTransactionDate] = useState('');
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');
  const [groupId, setGroupId] = useState('');
  const [groups, setGroups] = useState([]);
  const [groupOptions, setGroupOptions] = useState([]);

  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getGroups(setGroups);
  }, []);

  useEffect(() => {
    if (groups.length > 0) {
      const groupList = groups.map((group) => {
        return { value: group.id, label: group.group_title };
      });
      setGroupOptions(groupList);
    }
  }, [groups]);

  const saveTransactionHandle = async (event) => {
    event.preventDefault();

    setErrorStatus(false);
    setErrorMessage('');

    try {
      const resp = await addTransaction({
        groupId,
        transactionDate,
        amount,
        comment,
      });
      if (resp.success === true) {
        navigationHandler('/transactions');
      } else {
        setErrorStatus(true);
        setErrorMessage(
          resp.error[0][0]?.message || resp.error[0] || 'Klaida sukuriant grupę'
        );
      }
    } catch (err) {
      setErrorStatus(true);
      setErrorMessage(err.message);
    }
  };

  return (
    <>
      <Header />
      <h1>Išlaidų/Pajamų įvedimas</h1>
      {errorStatus && <Notification>{errorMessage}</Notification>}
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
