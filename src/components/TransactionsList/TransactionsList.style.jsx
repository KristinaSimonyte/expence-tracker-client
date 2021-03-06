import styled from 'styled-components';

export const THead = styled.thead`
  padding: 4rem;
`;
export const Table = styled.table`
text-align: left;
  position: relative;
  border-collapse:separate; 
  border-spacing:1em;

`;

export const TBody = styled.tbody`
font-color: black;
`;
export const Tr = styled.tr`
font-color: black;
padding: 0.25rem;
 background: white;
  position: sticky;
  top: 0;
  
`;
export const Th = styled.th`
font-size: 1.2rem;
font-color: black;
padding: 0.25rem;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.color === 'primary' ? '#507E67' : 'green'};
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);
  color: ${(props) => (props.color === 'primary' ? 'white' : 'white')};
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding: 1.5vh 4vh;
  text-transform: capitalize;
  margin: 0.5vh 0;

  :hover {
    background: ${(props) => (props.color === 'primary' ? 'white' : '#B2EFD1  ')};
    color: ${(props) => (props.color === 'primary' ? '#507E67' : 'green')};
    transition: ease 0.2s;
  }
}
`;

