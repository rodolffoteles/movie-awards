import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  background: #fff;
  padding: 3rem;
  border-radius: 0.5rem;
  text-align: center;
  color: #000;
  width: 80vw;
  max-width: 500px;
  transform: ${props =>
    props.isOpen ? 'translate(-50%, -50%)' : 'translate(-50%, 100%)'};

  transition: transform 0.3s ease;
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
