import * as S from './GroupForm.style';

const GroupForm = ({ group, setTitle, setType }) => {
  
  const typeoxOptions = [
    { value: 'INCOME', label: 'Pajamos'},
    { value: 'OUTCOME', label: 'Išlaidos'},
  ];
  return (
    <S.FormContainer>
      <S.InputBox>
        <S.Label>Grupės tipas</S.Label>
        <S.SelectIOType
          options={typeoxOptions}
          value={typeoxOptions.filter((option)=>{
            return option.value === group.type
          })[0]}
          onChange={(e) => {
            setType(e.value);
          }}
        />
      </S.InputBox>
      <S.InputBox>
        <S.Label>Grupės pavadinimas</S.Label>
        <S.Input
          value={group?.title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></S.Input>
      </S.InputBox>
    </S.FormContainer>
  );
};

export default GroupForm;
