import React from 'react';

import Overlay from '../Overlay';
import Button from '../Button';
import Backdrop from '../Backdrop';

import { Wrapper } from './styles';

const Modal = ({ isOpen, onClose, children }) => {
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
