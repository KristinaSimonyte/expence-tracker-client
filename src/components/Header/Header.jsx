import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';
import Navigation from '../Navigation/Navigation';
import {AuthContext} from '../../store/authContext';
import Logo from '../../assets/images/Logo.png';

const Header = ({ find }) => {
  const [block, setBlock] = useState(false);

  const authCtx = useContext(AuthContext);

  const handleClick = () => {
    block === false ? setBlock(true) : setBlock(false);
  };

  function logoutHandler(e) {
    authCtx.logout();
  }
  const links = [
    { title: 'Prisijungti', link: '/login', hide: authCtx.isLoggedIn },
    { title: 'Registruotis', link: '/register', hide: authCtx.isLoggedIn },
    {
      title: 'Pajamų/Išlaidų įvedimas',
      link: '/transactions',
      hide: !authCtx.isLoggedIn,
    },
    { title: 'Grupių tvarkymas', link: '/groups', hide: !authCtx.isLoggedIn },
  ];
  return (
    <S.Header>
      <S.Logo src={Logo} alt='Logo' />
      <Navigation links={links} find={find} />
      {block && (
        <S.MenuDiv className='myLinks'>
          {links.map((e) => (
            <S.MenuLink key={e.id} to={e.to} onClick={handleClick()}>
              {e.title}
            </S.MenuLink>
          ))}
        </S.MenuDiv>
      )}
      <S.MenuDiv className='myLinks'>
        <S.MenuLink
          onClick={logoutHandler}
          to={'/login'}
          hidden={!authCtx.isLoggedIn}
        >
          Atsijungti {!authCtx.isLoggedIn ? '1' : '2'}
        </S.MenuLink>
      </S.MenuDiv>
    </S.Header>
  );
};

Header.propTypes = {
  children: PropTypes.any,
  find: PropTypes.func,
};

export default Header;
