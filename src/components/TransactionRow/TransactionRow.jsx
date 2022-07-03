import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TransactionRow.style';
import { deleteTransaction } from '../../controllers/apiRequests';
import { useNavigate } from 'react-router-dom';

const TransactionRow = ({ id, amount, transactionDate, type, comment }) => {
  const navigateHandler = useNavigate();
  const handeleTransactionDelete = async () => {
    const resp = await deleteTransaction(id);
    if (resp.success === true) {
      navigateHandler(0);
    }
  };
  return (
    <S.Tr>
      <S.Td>{type}</S.Td>
      <S.Td>{new Date(transactionDate).toLocaleDateString('en-CA')}</S.Td>
      <S.Td>{amount}</S.Td>
      <S.Td>{comment}</S.Td>
      <S.Td>
        <S.Modify to={`/transactions/${id}/modify`}>Modify</S.Modify>
      </S.Td>
    </S.Tr>
  );
};

TransactionRow.propTypes = {
  id: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  transactionDate: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  comment: PropTypes.string,
};
export default TransactionRow;
