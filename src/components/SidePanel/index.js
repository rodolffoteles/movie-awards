import React from 'react';

import { Wrapper, CloseButton, Backdrop } from './styles';

const SidePanel = ({ children, title, isOpen, onClose }) => {
  return (
    <>
      <Wrapper role="dialog" isOpen={isOpen}>
        <header>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </header>

        {children}
      </Wrapper>

      <Backdrop onClick={onClose} isOpen={isOpen} />
    </>
  );
};

export default SidePanel;
