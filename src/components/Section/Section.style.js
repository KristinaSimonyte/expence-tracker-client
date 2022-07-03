import styled from 'styled-components';

export const Section = styled.div`
  background: ${(props) => props.color};
  color: inherit;
  border-radius: 0.5rem;
  padding: 6vh;
  margin: 20vh auto;
  font-size: 2vh;
  width: 75vh;

  a {
    color: inherit;
  }

  h2 {
    font-size: 4vh;

    @media screen and (max-width: 426px) {
      font-size: 5vh;
    }
  }

  @media screen and (max-width: 768px) {
    width: 50vw;
  }

  @media screen and (max-width: 426px) {
    width: 65vw;
    background-color: inherit;
    text-align: center;
    font-size: 5vw;

    a {
      color: inherit;
      text-decoration: none;
      border-bottom: 1px solid #ffffff;
    }
    button {
      width: 100%;
    }

    h2 {
      font-size: 8vw;
    }
  }
`;