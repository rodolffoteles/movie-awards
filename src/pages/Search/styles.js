import styled from 'styled-components';

export const Wrapper = styled.div`
  header {
    display: grid;
    grid-row-gap: 1rem;
    grid-template-columns: auto 1fr;
    padding: 1.25rem 1rem;

    a {
      grid-column: 1;
      display: flex;
      align-items: center;
      padding-right: 1rem;
    }

    h2 {
      text-align: center;
      grid-column: 2;
      white-space: nowrap;
    }

    div {
      grid-row: 2;
      grid-column: 1 / 3;
    }
  }

  svg {
    height: 1.25rem;
    fill: #ffffff;
  }
`;
