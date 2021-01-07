import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

import { Wrapper, CloseButton } from './styles';

const SidePanel = ({ children, title, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <Wrapper role="dialog">
          <header>
            <h2>{title}</h2>
            <CloseButton onClick={onClose}>
              <CloseIcon />
            </CloseButton>
          </header>

          {children}
        </Wrapper>
      )}
    </>
  );
};

export default SidePanel;
