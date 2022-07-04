import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GroupForm from '../../components/GroupForm/GroupForm';
import { getGroup, modifyGroup } from '../../controllers/apiRequests';
import Header from '../../components/Header/Header';
import * as S from './GroupModify.style';
import Notification from '../../components/Notification/Notification';

const GroupModify = () => {
  const { id } = useParams();
  const navigationHandler = useNavigate();
  const [group, setGroup] = useState({});
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getGroup(id, setGroup);
  }, [id]);

  useEffect(() => {
    setType(group.type);
    setTitle(group.group_title);
  }, [group]);

  const handleSubmitGroupAdd = async (event) => {
    event.preventDefault();

    setErrorStatus(false);
    setErrorMessage('');
    try {
      const resp = await modifyGroup({
        id,
        type,
        title,
      });
      if (resp.success === true) {
        navigationHandler('/groups');
      } else {
        setErrorStatus(true);
        setErrorMessage(
          resp.error[0][0]?.message ||
            resp.error[0] ||
            'Klaida koreguojant grupę'
        );
      }
    } catch (err) {
      setErrorStatus(true);
      setErrorMessage(err.message);
    }
  };

  return (
    <>
      <Header />
      <S.Container>
        {errorStatus && <Notification>{errorMessage}</Notification>}
        {!!type && (
          <GroupForm
            group={{ id, title, type }}
            setTitle={setTitle}
            setType={setType}
          ></GroupForm>
        )}
        <S.Button onClick={handleSubmitGroupAdd}>Keisti grupę</S.Button>
      </S.Container>
    </>
  );
};

export default GroupModify;
