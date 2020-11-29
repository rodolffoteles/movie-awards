import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.primaryDark};
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  right: 0;
  width: 100%;

  > header {
    padding: 1.25rem 1rem;

    > h2 {
      text-align: center;
      white-space: nowrap;
      margin-bottom: 1rem;
      padding-left: 1.5rem;
    }
  }

  > div {
    height: 100%;
    overflow-y: auto;
  }
`;

export const CloseButton = styled.button`
  align-items: center;
  display: flex;
  padding: 0.5rem;
  background: transparent;
  border-radius: 0.5rem;
  float: right;
  transition: background 0.2s ease-out;

  > svg {
    height: 1rem;
    width: 1rem;
    fill: ${props => props.theme.textLight};
  }

  &:hover > svg {
    fill: ${props => props.theme.textLight};
  }

  &:focus {
    background: ${props => props.theme.primaryLightest};
  }
`;
