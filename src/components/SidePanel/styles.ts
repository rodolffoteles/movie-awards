import styled, { css } from 'styled-components';

export const TRANSITION_DURATION = 400;

const slideRight = css`
  &.enter {
    transform: translateX(100%);
  }

  &.enter-active {
    transform: translateX(0%);
  }

  &.exit {
    transform: translateX(0%);
  }

  &.exit-active {
    transform: translateX(100%);
  }
`;

const slideUp = css`
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

export const Overlay = styled.aside`
  background-color: ${props => props.theme.colors.primary.darker};
  bottom: 0;
  box-shadow: 0 31px 41px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 3;
  transition: transform ${TRANSITION_DURATION}ms ease;
  ${slideUp}

  @media only screen and (min-width: 768px) {
    width: 24rem;
    ${slideRight}
  }

  > header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
`;
