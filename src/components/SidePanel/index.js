import React from 'react';

import Overlay from '../Overlay';
import Button from '../Button';
import Backdrop from '../Backdrop';

import { Wrapper } from './styles';

const SidePanel = ({ children, title, isOpen, onClose }) => {
  return (
    <Overlay onClose={onClose}>
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
    </Overlay>
  );
};

export default SidePanel;
