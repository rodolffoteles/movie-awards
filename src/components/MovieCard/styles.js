import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 1rem;
  width: 10rem;

  h1 {
    color: #f8d500;
    font-size: 7rem;
    font-weight: bold;
    position: absolute;
    bottom: -3.5rem;
  }
`;

export const Poster = styled.div`
  display: flex;
  height: 15rem;
  justify-content: center;
  position: relative;
  text-align: center;

  & > img {
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
  }
`;

export const AddButton = styled.button`
  align-items: center;
  background: #002263;
  border-radius: 0.5rem;
  color: #002e86;
  display: flex;
  font-size: 7rem;
  height: 100%;
  justify-content: center;
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
  margin-top: 3rem;
  text-align: center;
`;
