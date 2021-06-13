import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > header {
    align-items: center;
    display: flex;
    line-height: 2rem;
    padding: 2rem 10vw;
    width: 100%;

    svg {
      flex-shrink: 0;
      fill: ${props => props.theme.colors.secondary};
      margin-right: 1rem;
      max-height: 4rem;
    }
  }

  > h2 {
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
