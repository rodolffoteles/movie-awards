import React from 'react';

import { Wrapper } from './styles';

interface BackdropProps {
  isOpen: boolean;
  onClick(): void;
}

const Backdrop = ({ isOpen, onClick }: BackdropProps): JSX.Element => {
  return <Wrapper isOpen={isOpen} onClick={onClick} />;
};

export default Backdrop;
