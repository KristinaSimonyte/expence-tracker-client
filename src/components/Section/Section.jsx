import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Section.style';

const Section = ({ children }) => {
  return (
    <S.Section className="section">
        <div className="container">
      {children}
      </div>
    </S.Section>
  );
}; 

Section.propTypes = {
    children: PropTypes.node.isRequired,
};

 

export default Section;
   