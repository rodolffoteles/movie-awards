import styled from 'styled-components';

export const Wrapper = styled.ul`
  list-style: none;
`;

export const MovieItem = styled.li`
  padding: 1rem 0.75rem;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
  text-decoration: none;
  overflow: auto;

  &:hover {
    background: #021f63;
  }

  img {
    border-radius: 0.5rem;
    float: left;
    max-height: 6rem;
    margin-right: 1rem;
  }
`;
