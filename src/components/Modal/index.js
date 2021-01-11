import React from 'react';

import Button from '../../components/Button';
import { Wrapper, Backdrop } from './styles';

const Modal = ({ title, isOpen, onClose, children }) => {
  return (
    <>
      <Wrapper isOpen={isOpen}>
        <Button onClick={onClose}>✕</Button>
        {children}
      </Wrapper>
      <Backdrop isOpen={isOpen} onClick={onClose} />
    </>
  );
};

export default Modal;
