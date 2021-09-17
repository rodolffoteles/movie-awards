import styled from 'styled-components';

export const ANIMATION_DURATION = 300;

export const Overlay = styled.div<{ isOpen: boolean }>`
  background-color: ${props => props.theme.colors.primary.darker};
  bottom: 0;
  box-shadow: 0 31px 41px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  right: 0;
  transform: translateY(${props => (props.isOpen ? '0%' : '100%')});
  transition: transform ${ANIMATION_DURATION}ms ease,
    visibility ${ANIMATION_DURATION}ms ease;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 3;

  @media only screen and (min-width: 768px) {
    width: 24rem;
    transform: translateX(${props => (props.isOpen ? '0%' : '100%')});
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
`;
