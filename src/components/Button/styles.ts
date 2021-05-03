import styled from 'styled-components';

export const Wrapper = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  line-height: 1;
  padding: 0.5rem;
  transition: background 0.2s ease-out;

  &:focus {
    background: ${props => props.theme.colors.primary.default};
  }
`;
