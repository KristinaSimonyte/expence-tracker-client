import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #CFE3F6;
  width: calc(100% - 4rem);
  z-index: 10;

  li {
    list-style: none;
  }

  @media screen and (max-width: 1000px) {
    button.sc-bczRLJ {
      display: none;
    }

    li {
      display: none;
      list-style: none;
    }

    a.menu {
      display: block;
      background-color: #CFE3F6;
      border-radius: 3px;
      padding: 1rem;
      border: 1px solid white;
    }

    a.menu:hover {
      background-color: white;
      color: #6c11b7;
    }

    @media screen and (max-width: 900px) {
      width: 75vw;
    }

    @media screen and (max-width: 426px) {
      width: 65vw;
    }
  }
`;

export const Menu = styled.a`
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const MenuDiv = styled.div`
  @media screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    left: 10rem;
    padding: 2rem;
    color: white;
  }

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const MenuLink = styled(Link)`
  @media screen and (max-width: 1000px) {
    color: black;
    text-decoration: none;
    padding: 2rem 0;

    :hover {
      color: black;
    }
  }
`;

export const Button = styled.button`
  background-color: #6c11b7;
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);
  color: white;
  cursor: pointer;
  font-weight: bold;
  padding: 0.75rem 2rem;
  text-transform: capitalize;
  margin: 0.5rem 0;

  :hover {
    background: white;
    color: #6c11b7;
    transition: ease 0.2s;
  }
`;
export const Logo = styled.img`
  height: 7rem;
`;