import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 2vh;
  border: 1px solid #8a8a8a;
  box-sizing: border-box;
  font-size: 2vh;
  margin: 0.5vw 0 0.5vw;

  ::placeholder {
    text-transform: uppercase;
  }

  @media screen and (max-width: 426px) {
    text-align: center;
    margin-bottom: 1.5vh;
    border-radius: 1rem;
    padding: 1.5vh;
    font-size: 4vw;
  }
`;

export const Label = styled.label`
  width: 3vw;
  height: 1vw;
  font-size: 2vh;
  color: grey;
  text-decoration: none solid #8a8a8a;
  text-transform: uppercase;

  @media screen and (max-width: 426px) {
    display: none;
  }
`;