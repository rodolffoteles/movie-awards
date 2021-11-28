import styled from 'styled-components';

export const TRANSITION_DURATION = 300;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  position: fixed;
  justify-content: center;
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

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 100%;
  height: 2.5rem;
  width: 2.5rem;
  transition: background 0.2s ease;
  color: #2d3748;

  &:hover {
    background: #edf2f7;
  }

  &:focus {
    color: #000;
    background: #e2e8f0;
  }
`;

export const Overlay = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.black};
  padding: 1rem;
  max-width: 70vw;
  position: relative;

  ${CloseButton} {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }
`;
