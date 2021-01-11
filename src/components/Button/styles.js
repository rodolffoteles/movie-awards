import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  padding: 0.5rem;
  background: transparent;
  border-radius: 50%;
  transition: background 0.2s ease-out;
  font-size: 1.5rem;
  line-height: 1;

  &:focus {
    background: ${props => props.theme.primaryLighter};
  }
`;
