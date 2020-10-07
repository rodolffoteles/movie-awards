import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 10rem;
  position: relative;

  img {
    height: 15rem;
    border-radius: 0.5rem;
    width: 100%;
  }
`;

export const AddButton = styled(Link)`
  align-items: center;
  background: #002263;
  border-radius: 0.5rem;
  color: #002e86;
  display: flex;
  font-size: 7rem;
  height: 15rem;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease;
  transition-property: background, color;
  width: 100%;

  &:hover {
    background: #042b76;
    color: #043fb0;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: -1rem;
  right: -1rem;
  font-size: 1.5rem;
  font-weight: bold;
  background: #890304;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: #b00001;
  }
`;

export const Description = styled.div`
  position: relative;
  text-align: center;
  padding-top: 3rem;

  h1 {
    color: #f8d500;
    font-size: 7rem;
    position: absolute;
    font-weight: 600;
    width: 100%;
    pointer-events: none;
    top: -5rem;
  }
`;
