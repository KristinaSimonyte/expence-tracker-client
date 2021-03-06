import { useNavigate } from 'react-router-dom';
import TransactionRow from '../TransactionRow/TransactionRow';
import * as S from './TransactionsList.style';

function TransactionsList(props) {
  const navigationHandler = useNavigate();

  function addTransactionHandler(event) {
    navigationHandler('/transactions/add');
  }
  console.log(props.groups);
  return (
    <>
      <S.Table>
        <S.THead>
          <S.Tr>
            <S.Th> Grupės pavadinimas</S.Th>
            <S.Th>Išlaidų/Pajamų data</S.Th>
            <S.Th>Suma, EUR</S.Th>
            <S.Th>Komentaras</S.Th>
            <S.Th>Redaguoti</S.Th>
          </S.Tr>
        </S.THead>
        <S.TBody>
          {props.items &&
            props.items?.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                id={transaction.id}
                transactionDate={transaction.transaction_date}
                amount={transaction.amount}
                type={props.groups?.filter((option)=>{
                  return option.value === transaction?.group_id
                })[0]?.label || 'Undefined'}
                comment={transaction.comment}
              />
            ))}
        </S.TBody>
      </S.Table>
      <S.Button onClick={addTransactionHandler}>
        Įvesti išlaidas/pajamas
      </S.Button>
    </>
  );
}
export default TransactionsList;
