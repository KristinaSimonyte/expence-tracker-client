import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ color, children, type, onClick }) => {
  return (
    <S.Button className={`button ${color}`} type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
}; 

Button.propTypes = {
    color: PropTypes.oneOf(["primary", "delete"]),
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: "button",
}; 

export default Button;
  