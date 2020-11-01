import styled from 'styled-components';

export const Wrapper = styled.ul`
  list-style: none;
`;

export const MovieItem = styled.li`
  border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: auto 1fr 0.25fr;
  overflow: auto;
  padding: 1rem 0.75rem;
  text-decoration: none;

  &:hover {
    background: ${props => props.theme.primary};
  }

  img {
    border-radius: 0.5rem;
    height: 6rem;
    margin-right: 1rem;
  }

  button {
    align-self: center;
    background: transparent;
    border: 2px solid ${props => props.theme.textLight};
    border-radius: 100%;
    font-size: 1.5rem;
    font-weight: 700;
    height: 2.5rem;
    justify-self: center;
    margin-left: 1rem;
    width: 2.5rem;

    &:hover {
      background: ${props => props.theme.textLight};
      color: ${props => props.theme.primary};
    }
  }
`;
