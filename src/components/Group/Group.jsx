import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './Group.style';

const Group = ({ children }) => {
  return (
    <S.Container>
      <S.Row>
        <S.Type>{children.type}</S.Type>
        <S.Title>{children.group_title}</S.Title>
        <S.List>
        <Link to={`/groups/${children.id}/modify`}>Koreguoti grupę</Link>
        </S.List>
      </S.Row>
    </S.Container>
  );
};

Group.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Group;
