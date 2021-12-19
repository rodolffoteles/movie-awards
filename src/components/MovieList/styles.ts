import styled from 'styled-components';

export const Wrapper = styled.ul`
  list-style: none;
`;

export const MovieListItem = styled.li`
  border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
  display: grid;
  gap: 1rem;
  grid-template-columns: auto 1fr 0.25fr;
  padding: 1rem 0.75rem;
  text-decoration: none;

  &:hover {
    background: ${props => props.theme.colors.primary};
  }

  img {
    border-radius: 0.5rem;
    width: 4rem;
  }
`;

export const Center = styled.div`
  align-self: center;
  justify-self: center;
`;
