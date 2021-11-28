import styled from 'styled-components';

export const TRANSITION_DURATION = 300;

export const Wrapper = styled.div<{ isOpen?: boolean }>`
  background-color: rgba(91, 112, 131, 0.4);
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  transition: all 0.3s ease;
  z-index: 2;

  &.enter {
    opacity: 0;
  }

  &.enter-active {
    opacity: 1;
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
  }
`;
