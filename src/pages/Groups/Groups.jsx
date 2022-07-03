import React, { useEffect, useState } from 'react';
import GroupList from '../../components/GroupList/GroupList';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import { getGroups } from '../../controllers/apiRequests';

import * as S from './Groups.style';
const Groups = () => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    getGroups(setGroups);
  }, []);
  return (
    <S.Container>
      <Header title='Income/outcome groups' />
      <Section>
        <p className='info'>Jūs neturite įvestų pajamų/išlaidų grupių.</p>
        <GroupList items={groups}/>
      </Section>
    </S.Container>
  );
};

export default Groups;
