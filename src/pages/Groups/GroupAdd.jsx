import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GroupForm from '../../components/GroupForm/GroupForm';
import { addGroup } from '../../controllers/apiRequests';
import Header from '../../components/Header/Header';
import * as S from './GroupAdd.style';
import Notification from '../../components/Notification/Notification';

const GroupAdd = () => {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigationHandler = useNavigate();

  const handleSubmitGroupModify = async (event) => {
    event.preventDefault();
    setErrorStatus(true);
    setErrorMessage(false);

    const resp = await addGroup({
      title,
      type,
    });
    console.log(resp);
    if (resp.success === true) {
      navigationHandler('/groups');
    } else {
      setErrorStatus(true);
      setErrorMessage(resp.error);
    }
  };

  return (
    <S.Container>
      <Header />
      {errorStatus && <Notification>{errorMessage}</Notification>}
      <GroupForm group={{}} setTitle={setTitle} setType={setType} />
      <S.Button onClick={handleSubmitGroupModify}>Sukurti grupę</S.Button>
    </S.Container>
  );
};

export default GroupAdd;
