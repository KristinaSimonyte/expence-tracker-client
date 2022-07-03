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
      <S.THead>
        <S.Th>
          <S.Td> Grupės pavadinimas</S.Td>
          <S.Td>Išlaidų/Pajamų data</S.Td>
          <S.Td>Suma, EUR</S.Td>
          <S.Td>Komentaras</S.Td>
          <S.Td>Redaguoti</S.Td>
        </S.Th>
      </S.THead>
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
    <S.Button onClick={addTransactionHandler}>Įvesti išlaidas/pajamas</S.Button>
    </>
  );
}
export default TransactionsList;
