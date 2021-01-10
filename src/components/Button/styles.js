import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  padding: 0.5rem;
  background: transparent;
  border-radius: 0.5rem;
  transition: background 0.2s ease-out;
  font-size: 1.5rem;
  line-height: 1;

  &:hover {
    color: ${props => props.theme.primaryDark};
  }

  &:focus {
    background: ${props => props.theme.primaryLightest};
  }
`;
