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
    align-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin-top: 3rem;
  }
`;

export const SearchBarWrapper = styled.div`
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

export const Scrollable = styled.div`
  overflow: scroll;
`;
