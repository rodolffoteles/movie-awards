import styled from 'styled-components';

export const Wrapper = styled.ul`
  list-style: none;
`;

export const MovieListItem = styled.li`
  border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: auto 1fr 0.25fr;
  padding: 1rem 0.75rem;
  text-decoration: none;

  &:hover {
    background: ${props => props.theme.primary};
  }

  img {
    border-radius: 0.5rem;
    margin-right: 1rem;
    width: 4rem;
  }

  button {
    align-self: center;
    background: transparent;
    border: 2px solid ${props => props.theme.textLight};
    border-radius: 100%;
    cursor: auto;
    font-size: 1.5rem;
    font-weight: 700;
    height: 2.5rem;
    justify-self: center;
    margin-left: 1rem;
    width: 2.5rem;

    &:disabled {
      opacity: 0.3;
    }

    &:hover:enabled {
      background: ${props => props.theme.textLight};
      color: ${props => props.theme.primary};
    }
  }
`;
