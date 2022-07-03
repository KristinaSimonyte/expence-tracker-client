import * as S from './TransactionForm.style';

const TransactionForm = ({
  transaction,
  setAmount,
  setComment,
  setGroupId,
  setTransactionDate
}
) => {

  return (
    <S.FormContainer>
      <S.InputBox>
        <S.Label>Grupės pavadinimas</S.Label>
        <S.Input
          value={transaction?.groupId}
          onChange={(e) => setGroupId(e.target.value)}
        />
      </S.InputBox>
      <S.InputBox>
        <S.Label>Išlaidų/Pajamų data</S.Label>
        <S.Input
          type='date'
          value={transaction?.transactionDate}
          onChange={(e) => {console.log(e.target.value);
            setTransactionDate(e.target.value)}}
        />
      </S.InputBox>
      <S.InputBox>
        <S.Label>Suma, EUR</S.Label>
        <S.Input
        type='number'
          value={transaction?.amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </S.InputBox>
      <S.InputBox>
        <S.Label>Komentaras</S.Label>
        <S.Input
          value={transaction?.comment}
          onChange={(e) => {setComment(e.target.value)}}
        />
      </S.InputBox>
    </S.FormContainer>
  );
};

export default TransactionForm;
