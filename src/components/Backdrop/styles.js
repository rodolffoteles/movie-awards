import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  opacity: ${props => (props.isOpen ? '1' : '0')};
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  transition: all 0.3s ease;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  z-index: 2;
`;
