import React from 'react';
import PropTypes from 'prop-types';
import * as S from './GroupList.style';

import Group from '../Group/Group';

const GroupList = ({ items }) => {
    
  return (
    <S.Container>
      {items && items.map((item) => <Group key={item.id}>{item}</Group>)}
    </S.Container>
  );
};

GroupList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GroupList;
