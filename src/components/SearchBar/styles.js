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
  background: #002263;
  border: 0.1rem solid #002263;
  border-radius: 1rem;
  padding: 0.5rem 1rem 0.5rem 3rem;
  width: 100%;

  &:focus {
    border-color: #f8d500;
  }

  &:focus + svg {
    fill: #f8d500;
  }
`;
