import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import KeypressListener from '../KeypressListener';
import Button from '../Button';
import Backdrop from '../Backdrop';

import { Wrapper, Overlay, TRANSITION_DURATION } from './styles';

interface ModalProps {
  /** The content to display inside the modal */
  children: React.ReactNode;
  /** Whether the modal is open or not */
  isOpen: boolean;
  /** Callback when the modal is closed */
  onClose(): void;
}

const Modal = ({ isOpen, onClose, children }: ModalProps): JSX.Element => {
  const wrapperRef = useRef(null);

  return (
    <CSSTransition
      in={isOpen}
      timeout={TRANSITION_DURATION}
      nodeRef={wrapperRef}
      unmountOnExit
    >
      <Wrapper ref={wrapperRef}>
        <Overlay role="dialog">
          <header>
            <Button onClick={onClose}>✕</Button>
          </header>
          <KeypressListener keyName="Escape" handler={onClose} />

          {children}
        </Overlay>
      </Wrapper>

      {/* <Backdrop isOpen={state == 'entered'} onClick={onClose} /> */}
    </CSSTransition>
  );
};

export default Modal;
