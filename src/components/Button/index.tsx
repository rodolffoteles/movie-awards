import React from 'react';

import { Wrapper } from './styles';

interface ButtonProps {
  children: string;
  onClick(): void;
}

const Button = ({ onClick, children }: ButtonProps): JSX.Element => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default Button;