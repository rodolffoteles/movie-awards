import React from 'react';

import { Wrapper } from './styles';

interface BackdropProps {
  isOpen: boolean;
  onClick(): void;
}

const Backdrop = ({ isOpen, onClick }: BackdropProps) => {
  return <Wrapper isOpen={isOpen} onClick={onClick} />;
};

export default Backdrop;
