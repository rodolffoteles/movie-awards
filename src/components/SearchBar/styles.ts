import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  svg {
    fill: rgba(255, 255, 255, 0.5);
    left: 1rem;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
  }

  input {
    background: ${props => props.theme.colors.primary.default};
    border: 2px solid ${props => props.theme.colors.primary.default};
    border-radius: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem 0.5rem 3rem;
    width: 100%;

    &:focus {
      border-color: ${props => props.theme.colors.secondary.default};
    }

    &:focus + svg {
      fill: ${props => props.theme.colors.secondary.default};
    }
  }
`;
