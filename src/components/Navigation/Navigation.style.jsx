import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: darkblue;
  &:hover {
    color: white;
    border-bottom: 1px solid white;
    transition: 0.3s;
  }
`;