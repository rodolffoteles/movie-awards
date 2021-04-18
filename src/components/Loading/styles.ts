// Author: Luke Haas
// Repository: https://github.com/lukehaas/css-loaders

import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  margin: 60px auto;
  font-size: 4px;
  position: relative;
  text-indent: -9999em;
  border: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  transform: translateZ(0);
  animation: ${animation} 1.1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;
