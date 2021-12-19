import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 10rem;

  img {
    border-radius: 0.5rem;
    height: 15rem;
    width: 100%;
  }
`;

export const AddButton = styled.button`
  background: ${props => props.theme.colors.primary.default};
  border: none;
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.primary.lighter};
  cursor: pointer;
  display: grid;
  font-size: 7rem;
  height: 15rem;
  place-items: center;
  text-decoration: none;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    background: ${props => props.theme.colors.primary.light};
    color: ${props => props.theme.colors.primary.lightest};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: -0.7rem;
  top: -0.7rem;
`;

export const Description = styled.div`
  position: relative;
  text-align: center;
  padding-top: 3rem;
`;

export const RankingNumber = styled.div`
  color: ${props => props.theme.colors.secondary.default};
  font-size: 7rem;
  font-weight: 600;
  position: absolute;
  pointer-events: none;
  top: -5rem;
  width: 100%;
`;
