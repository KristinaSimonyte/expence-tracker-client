import React, { useEffect, useState } from 'react';
import GroupList from '../../components/GroupList/GroupList';
import Header from '../../components/Header/Header';
import { getGroups } from '../../controllers/apiRequests';

import * as S from './Groups.style';
const Groups = () => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    getGroups(setGroups);
  }, []);

  return (
    <S.Container>
      <Header />
      {groups && <GroupList items={groups} />}
    </S.Container>
  );
};

export default Groups;
