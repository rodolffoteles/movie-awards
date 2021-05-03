import React from 'react';

import Overlay from '../Overlay';
import Button from '../Button';
import Backdrop from '../Backdrop';

import { Wrapper } from './styles';

interface SidePanelProps {
  /** The content to display inside panel */
  children: React.ReactNode;
  /** The content to display inside panel */
  title: string;
  /** Whether or not the panel is open */
  isOpen: boolean;
  /** Callback when the panel is closed */
  onClose(): void;
}

const SidePanel = ({
  children,
  title,
  isOpen,
  onClose,
}: SidePanelProps): JSX.Element => {
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
