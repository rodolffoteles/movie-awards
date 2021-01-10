import styled from 'styled-components';
import breakpoints from '../../styles/tokens/breakpoints';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.primaryDark};
  box-shadow: 0 31px 41px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 3;
  transform: ${props => (props.isOpen ? 'translateY(0%)' : 'translateY(100%)')};
  transition: transform 0.3s ease;

  @media ${breakpoints.medium} {
    width: 24rem;
    transform: ${props =>
      props.isOpen ? 'translateX(0%)' : 'translateX(100%)'};
  }

  > header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  opacity: ${props => (props.isOpen ? '1' : '0')};
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.3 ease;
  visibility: ${props => !props.isOpen && 'hidden'};
  z-index: 2;
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
