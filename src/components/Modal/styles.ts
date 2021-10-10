import styled from 'styled-components';

export const TRANSITION_DURATION = 300;

export const Overlay = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.black};
  padding: 1rem;
  max-width: 70vw;
`;

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  z-index: 3;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transition: transform ${TRANSITION_DURATION}ms ease;

  &.enter {
    transform: translateY(100%);
  }

  &.enter-active {
    transform: translateY(0%);
  }

  &.exit {
    transform: translateY(0%);
  }

  &.exit-active {
    transform: translateY(100%);
  }
`;
