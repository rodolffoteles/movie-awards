import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  svg {
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    fill: rgba(255, 255, 255, 0.5);
  }
`;

export const InputField = styled.input`
  background: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem 0.5rem 3rem;
  width: 100%;

  &:focus {
    border-color: ${props => props.theme.secondary};
  }

  &:focus + svg {
    fill: ${props => props.theme.secondary};
  }
`;
