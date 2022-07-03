import { useNavigate } from 'react-router-dom';
import TransactionRow from '../TransactionRow/TransactionRow';
import * as S from './TransactionsList.style';

function TransactionsList(props) {
    const navigationHandler = useNavigate();

function addTransactionHandler(event){
    navigationHandler('/transactions/add')
}
  return (
    <>
    <S.Table>
      <S.TBody>
        {props.items?.map((transaction) => (
            
          <TransactionRow
            key={transaction.id}
            id={transaction.id}
            transactionDate={transaction.transaction_date}
            amount={transaction.amount}
            type={transaction.group_id}
            comment={transaction.comment}
          />
        ))}
      </S.TBody>
    </S.Table>
    <button onClick={addTransactionHandler}>add transaction</button>
    </>
  );
}
export default TransactionsList;
