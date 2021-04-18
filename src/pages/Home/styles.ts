import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > header {
    display: flex;
    padding: 2rem;
    width: 100%;
  }

  > h1 {
    text-align: center;
  }

  > section {
    align-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin-top: 3rem;
    padding: 0 2rem;
  }
`;

export const SearchBarWrapper = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
`;
