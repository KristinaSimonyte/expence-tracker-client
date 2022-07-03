import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Group = ({ children }) => {
  return (
    <>
      <div className='group'>
        <div className='single-group'>{children.type}</div>
      </div>

      <div className='group'>
        <div className='single-group'>{children.group_title}</div>
      </div>
      <Link to={`/groups/${children.id}/modify`} >Koreguoti grupę</Link>
    </>
  );
};

Group.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Group;