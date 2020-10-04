import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    text-align: center;
  }

  > section {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
