import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, children, type }) => {
  return (
    <button className={`button ${color}`} type={type}>
      {children}
    </button>
  );
}; 

Button.propTypes = {
    color: PropTypes.oneOf(["primary", "secondary"]),
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
    color: "secondary",
    type: "button",
}; 

export default Button;
  