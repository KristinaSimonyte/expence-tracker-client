import React from 'react';
import PropTypes from 'prop-types';

import Group from "../Group/Group";

const GroupList = ({items}) => (
<>{items && items.map(item => <Group key={item}>{item}</Group>)}</>
);

GroupList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GroupList;