import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Group.style';

const Group = ({ children }) => {
    return (
      <S.Group className='group'>
        <div className='single-group'>{children}</div>
      </S.Group>
    );
  };
  
  Group.propTypes = {
      children: PropTypes.string.isRequired,
  };
  
  export default Group;
