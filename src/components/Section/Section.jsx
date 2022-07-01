import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return (
    <section className="section">
        <div className="container">
      {children}
      </div>
    </section>
  );
}; 

Section.propTypes = {
    children: PropTypes.node.isRequired,
};

 

export default Section;
   