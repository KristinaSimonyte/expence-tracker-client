import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.style';

const Navigation = ({ links }) => {
  return (
    <S.Nav>
      {links &&
        links.map((link) => (
          <S.StyledLink key={link.title} to={link.link} hidden={link.hide}>
            {link.title}
          </S.StyledLink>
        ))}
    </S.Nav>
  );
};

Navigation.propTypes = {
  children: PropTypes.string,
  links: PropTypes.array,
};

export default Navigation;