import * as S from './Balance.style';

const Balance = ({ totalIncomeAmout, totalOutcomeAmout, balance }) => {
  return (
    <S.Container>
      <S.IncomeAmout>Pajamos: {totalIncomeAmout}</S.IncomeAmout>
      <S.OutcomeAmount>Išlaidos: {totalOutcomeAmout}</S.OutcomeAmount>
      <S.Balance>Likutis: {balance}</S.Balance>
    </S.Container>
  );
};

export default Balance;
