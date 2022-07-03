import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GroupForm from '../../components/GroupForm/GroupForm';
import { getGroup, modifyGroup } from '../../controllers/apiRequests';
import Header from '../../components/Header/Header';
import * as S from './GroupModify.style';

const GroupModify = () => {
  const { id } = useParams();
  const navigationHandler = useNavigate();
  const [group, setGroup] = useState({});
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    getGroup(id, setGroup);
  }, [id]);

  useEffect(() => {
    setType(group.type);
    setTitle(group.group_title);
  }, [group]);

  const handleSubmitGroupAdd = async (event) => {
    event.preventDefault();
    const resp = await modifyGroup({
      id,
      type,
      title,
    });
    if (resp.success === true) {
      navigationHandler('/groups');
    }
  };

  return (
    <>
    <Header />
    <S.Container>
      {!!type && <GroupForm
        group={{ id, title, type }}
        setTitle={setTitle}
        setType={setType}
      ></GroupForm>
}
      <S.Button onClick={handleSubmitGroupAdd}>Keisti grupę</S.Button>

    </S.Container>
    </>
  );
};

export default GroupModify;
