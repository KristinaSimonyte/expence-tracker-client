import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import { getGroups } from '../../controllers/apiRequests';

const Groups = () => {
  const [groups , setGroups] = useState([]);
    useEffect(()=>{
      getGroups(setGroups);
    },[]);
  return (
    <>
      <Header title='Income/outcome groups' />
      <Section>
        <p className='info'>Jūs neturite įvestų pajamų/išlaidų grupių.</p>
        {groups && groups?.map((group)=>(
        <Section>{group.title}</Section>
      ))
      }
      </Section>
      </>
  );
};

export default Groups;

