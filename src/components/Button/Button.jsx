import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ color, children, type }) => {
  return (
    <S.Button className={`button ${color}`} type={type}>
      {children}
    </S.Button>
  );
}; 

Button.propTypes = {
    color: PropTypes.oneOf(["primary", "secondary"]),
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
    type: "button",
}; 

export default Button;
  