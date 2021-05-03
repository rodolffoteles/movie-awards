import styled from 'styled-components';

export const Wrapper = styled.div<{ isOpen: boolean }>`
  background: #fff;
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.black};
  left: 50%;
  max-width: 500px;
  padding: 3rem;
  position: fixed;
  text-align: center;
  transform: ${props =>
    props.isOpen ? 'translate(-50%, -50%)' : 'translate(-50%, 100%)'};
  transition: transform 0.3s ease, visibility 0.3s ease;
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

  button {
    float: right;
    margin: -2rem;
  }

  img {
    margin-bottom: 2rem;
    max-width: 15rem;
    width: 100%;
  }
`;
