import styled from 'styled-components';
import breakpoints from '../../styles/tokens/breakpoints';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.primaryDark};
  bottom: 0;
  box-shadow: 0 31px 41px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  right: 0;
  transform: ${props => (props.isOpen ? 'translateY(0%)' : 'translateY(100%)')};
  transition: transform 0.3s ease, visibility 0.3s ease;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 3;

  @media ${breakpoints.medium} {
    width: 24rem;
    transform: ${props =>
      props.isOpen ? 'translateX(0%)' : 'translateX(100%)'};
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
`;
