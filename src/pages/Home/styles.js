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
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;

    > div {
      margin: 0 0.75rem 1rem 0.75rem;
    }
  }
`;
