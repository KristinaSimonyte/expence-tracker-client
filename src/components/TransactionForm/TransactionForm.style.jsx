import styled from 'styled-components';

export const FormContainer = styled.div`
  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

export const Box = styled.div``;
export const InputBox = styled.div`
display: flex;
flex-direction: column;`;

export const Input = styled.input`
  width: 50%;
  padding: 1rem;
  border: 1px solid #8a8a8a;
  box-sizing: border-box;
  font-size: 1.2rem;
  margin: 0.5vw 0 0.5vw;

  ::placeholder {
    text-transform: uppercase;
  }

  @media screen and (max-width: 426px) {
    text-align: center;
    margin-bottom: 1.5vh;
    border-radius: 1rem;
    padding: 1.5vh;
    font-size: 1rem;
  }
`;
export const Label = styled.label`
  width: 20rem;
  height: 2rem;
  font-size: 1.2rem;
  color: #393C3F;
  text-decoration: none solid #8a8a8a;
  text-transform: uppercase;
  padding-top: 2rem;

  @media screen and (max-width: 426px) {
    display: none;
  }
`;

