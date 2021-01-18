import React from 'react';

import { Wrapper } from './styles';

const Button = ({ onlyIcon, onClick, children }) => {
  return (
    <Wrapper onlyIcon={onlyIcon} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Button;
