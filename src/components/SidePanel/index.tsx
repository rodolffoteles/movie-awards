import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';

import KeypressListener from '../KeypressListener';
import Button from '../Button';
import Backdrop from '../Backdrop';

import { Overlay, ANIMATION_DURATION } from './styles';

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
  const wrapperRef = useRef(null);

  return (
    <Transition
      nodeRef={wrapperRef}
      in={isOpen}
      timeout={ANIMATION_DURATION}
      unmountOnExit
    >
      {state => (
        <div ref={wrapperRef}>
          <Overlay role="dialog" isOpen={state == 'entered'}>
            <header>
              <h2>{title}</h2>
              <Button onClick={onClose}>✕</Button>
            </header>

            {children}
          </Overlay>

          <Backdrop onClick={onClose} isOpen={state == 'entered'} />
          <KeypressListener keyName="Escape" handler={onClose} />
        </div>
      )}
    </Transition>
  );
};

export default SidePanel;
