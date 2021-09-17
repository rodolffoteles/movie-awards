import styled from 'styled-components';

export const ANIMATION_DURATION = 300;

export const Overlay = styled.div<{ isOpen: boolean }>`
  background: #fff;
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.black};
  left: 50%;
  max-width: 500px;
  padding: 3rem;
  position: fixed;
  text-align: center;
  transform: translate(-50%, ${props => (props.isOpen ? '-50%' : '100%')});
  transition: transform ${ANIMATION_DURATION}ms ease,
    visibility ${ANIMATION_DURATION}ms ease;
  top: 50%;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  width: 80vw;
  z-index: 3;

  * {
    color: inherit;
  }

  h1 {
    margin-bottom: 0.5rem;
  }
`;
