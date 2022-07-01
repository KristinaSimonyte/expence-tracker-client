import React from 'react';
import PropTypes from 'prop-types';

const Group = ({ children }) => {
    return (
      <div className='group'>
        <div className='single-group'>{children}</div>
      </div>
    );
  };
  
  Group.propTypes = {
      children: PropTypes.string.isRequired,
  };
  
  export default Group;
