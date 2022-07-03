import React from 'react';
import PropTypes from 'prop-types';
import * as S from './GroupList.style';

import Group from '../Group/Group';
import { useNavigate } from 'react-router-dom';

const GroupList = ({ items }) => {
    const navigationHandler = useNavigate();

    const  addGroupHandler = () => {
     
        navigationHandler('/groups/add')
    }
  return (
    <S.Container>
      {items && items.map((item) => <Group key={item.id}>{item}</Group>)}
      <S.Button onClick={addGroupHandler}>Įvesti grupe</S.Button>
    </S.Container>
  );
};

GroupList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GroupList;
