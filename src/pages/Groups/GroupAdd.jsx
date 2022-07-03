import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GroupForm from '../../components/GroupForm/GroupForm';
import { addGroup } from '../../controllers/apiRequests';
import Header from '../../components/Header/Header';
import * as S from './GroupAdd.style';

const GroupAdd = () => {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const navigationHandler = useNavigate();

  const handleSubmitGroupModify = async (event) => {
    event.preventDefault();
    const resp = await addGroup({
      title,
      type,
    });
    if (resp.success === true) {
      navigationHandler('/groups');
    }
  };

  return (
    <S.Container>
      <Header />
      <GroupForm
        group={{}}
        setTitle={setTitle}
        setType={setType}
      />
      <S.Button onClick={handleSubmitGroupModify}>Sukurti grupę</S.Button>
    </S.Container>
  );
};

export default GroupAdd;
