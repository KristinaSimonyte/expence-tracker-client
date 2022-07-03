import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TransactionRow.style';

const TransactionRow = ({ id, amount, transactionDate, type, comment }) => {
 
    return (
    <S.Row>
      <S.Cell>{type}</S.Cell>
      <S.Cell>{new Date(transactionDate).toLocaleDateString('en-CA')}</S.Cell>
      <S.Cell>{amount}</S.Cell>
      <S.Cell>{comment}</S.Cell>
      <S.Cell><S.Modify to={`/transactions/${id}/modify`}>Modify</S.Modify></S.Cell>
    </S.Row>
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
