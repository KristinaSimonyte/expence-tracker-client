import * as S from './GroupForm.style';

const GroupForm = ({group, setTitle, setType}) =>{

console.log(group);
    const typeoxOptions = [
        { value: 'INCOME', label: 'Pajamos' },
        { value: 'OUTCOME', label: 'Išlaidos' }
      ]

    return (
<S.FormContainer>
    <S.InputBox>
    <S.Label>Grupės tipas</S.Label>
        <S.SelectIOType options={typeoxOptions} onChange={(e)=>{e.preventDefault(); setType(e.target.value);}}/>
    </S.InputBox>
    <S.InputBox>
        <S.Label>Grupės pavadinimas</S.Label>
        <S.Input value={group?.group_title} onChange={(e)=>{e.preventDefault(); setTitle(e.target.value);}}></S.Input>
    </S.InputBox>
</S.FormContainer>

    );
}

export default GroupForm;