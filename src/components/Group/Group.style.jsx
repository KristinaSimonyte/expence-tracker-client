import styled from 'styled-components';

export const Row = styled.div`
display: flex;
flex-direction: row;
border: 1px solid lightgrey;
align-items: center;
width: 50%;
margin-top:1rem;
`;

export const Type = styled.div`
font-size: 1.2rem;
font-color: black;
padding: 1rem;

`;
export const Title = styled.div`
font-size: 1.2rem;
font-color: black;
padding: 1rem;
`;
export const List = styled.div`
font-size: 1.2rem;
font-color: black;
padding-top: 1rem;
padding: 1rem;
`;
export const Container = styled.div`
display: flex;
flex-direction: column;

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
    background: ${(props) =>
      props.color === 'primary' ? 'white' : '#B2EFD1  '};
    color: ${(props) => (props.color === 'primary' ? '#507E67' : 'green')};
    transition: ease 0.2s;
  }
}
`;
