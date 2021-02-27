import React from 'react';

import Overlay from '../Overlay';
import Button from '../Button';
import Backdrop from '../Backdrop';

import { Wrapper } from './styles';

interface SidePanelProps {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose(): void;
}

const SidePanel = ({ children, title, isOpen, onClose }: SidePanelProps) => {
  return (
    <Overlay onClose={onClose}>
      <Wrapper role="dialog" isOpen={isOpen}>
        <header>
          <h2>{title}</h2>
          <Button onClick={onClose}>✕</Button>
        </header>

        {children}
      </Wrapper>

      <Backdrop onClick={onClose} isOpen={isOpen} />
    </Overlay>
  );
};

export default SidePanel;
