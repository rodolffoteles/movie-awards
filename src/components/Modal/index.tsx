import React from 'react';

import Overlay from '../Overlay';
import Button from '../Button';
import Backdrop from '../Backdrop';

import { Wrapper } from './styles';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose(): void;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Overlay onClose={onClose}>
      <Wrapper isOpen={isOpen}>
        <Button onClick={onClose}>✕</Button>
        {children}
      </Wrapper>

      <Backdrop isOpen={isOpen} onClick={onClose} />
    </Overlay>
  );
};

export default Modal;
