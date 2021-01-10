import React from 'react';

import Button from '../Button';

import { Wrapper, Backdrop } from './styles';

const SidePanel = ({ children, title, isOpen, onClose }) => {
  return (
    <>
      <Wrapper role="dialog" isOpen={isOpen}>
        <header>
          <h2>{title}</h2>
          <Button onlyIcon onClick={onClose}>
            ✕
          </Button>
        </header>

        {children}
      </Wrapper>

      <Backdrop onClick={onClose} isOpen={isOpen} />
    </>
  );
};

export default SidePanel;
