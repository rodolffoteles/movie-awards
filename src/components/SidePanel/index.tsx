import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import KeypressListener from '../KeypressListener';
import Button from '../Button';
import Backdrop from '../Backdrop';

import { Overlay, TRANSITION_DURATION } from './styles';
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg';

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
  const overlayRef = useRef(null);

  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={TRANSITION_DURATION}
        nodeRef={overlayRef}
        unmountOnExit
      >
        <Overlay ref={overlayRef} role="dialog">
          <header>
            <h2>{title}</h2>
            <Button plain icon={<CloseIcon />} onClick={onClose} />
          </header>

          <KeypressListener keyName="Escape" handler={onClose} />
          {children}
        </Overlay>
      </CSSTransition>

      <Backdrop onClick={onClose} isOpen={isOpen} />
    </>
  );
};

export default SidePanel;
