import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 10rem;
  position: relative;

  img {
    height: 15rem;
    border-radius: 0.5rem;
    width: 100%;
  }
`;

export const AddButton = styled.button`
  align-items: center;
  background: ${props => props.theme.primary};
  border-radius: 0.5rem;
  color: ${props => props.theme.primaryLighter};
  display: flex;
  font-size: 7rem;
  height: 15rem;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease;
  transition-property: background, color;
  width: 100%;

  &:hover {
    background: ${props => props.theme.primaryLight};
    color: ${props => props.theme.primaryLightest};
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: -1rem;
  right: -1rem;
  font-size: 1.5rem;
  font-weight: bold;
  background: ${props => props.theme.danger};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${props => props.theme.dangerLight};
  }
`;

export const Description = styled.div`
  position: relative;
  text-align: center;
  padding-top: 3rem;

  h1 {
    color: ${props => props.theme.secondary};
    font-size: 7rem;
    position: absolute;
    font-weight: 600;
    width: 100%;
    pointer-events: none;
    top: -5rem;
  }
`;
