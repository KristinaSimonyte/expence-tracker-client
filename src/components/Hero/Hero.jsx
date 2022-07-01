import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title, subtitle }) => {
  return (
    <section className="color">
      <div className='hero-body'>
        <div className='container'>
          <p className='title'>{title}</p>
          <p className='subtitle'>{subtitle}</p>
      </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.string,
};

Hero.defaultProps = {
  color: 'info',
};

export default Hero;
