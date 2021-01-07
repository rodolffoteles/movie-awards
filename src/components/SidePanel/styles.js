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
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  padding: 0.5rem;
  background: transparent;
  border-radius: 0.5rem;
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
