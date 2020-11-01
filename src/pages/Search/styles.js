import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.primaryDark};

  header {
    padding: 1.25rem 1rem;

    > h2 {
      text-align: center;
      white-space: nowrap;
      margin-bottom: 1rem;
    }
  }
`;

export const CloseButton = styled.button`
  padding: 0.5rem;
  background: transparent;
  float: right;

  > svg {
    height: 1rem;
    width: 1rem;
    fill: ${props => props.theme.textLight};
  }

  &:hover svg {
    fill: ${props => props.theme.primaryLightest};
  }
`;
