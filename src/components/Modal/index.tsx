import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import KeypressListener from '../KeypressListener';
import Backdrop from '../Backdrop';
import ScrollLock from '../ScrollLock';

import { Wrapper, Overlay, TRANSITION_DURATION, CloseButton } from './styles';

interface ModalProps {
  /** The content to display inside the modal */
  children: React.ReactNode;
  /** Whether the modal is open or not */
  isOpen: boolean;
  /** Callback when the modal is closed */
  onClose(): void;
}

const Modal = ({ isOpen, onClose, children }: ModalProps): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={TRANSITION_DURATION}
        nodeRef={wrapperRef}
        unmountOnExit
      >
        <Wrapper ref={wrapperRef}>
          <Overlay role="dialog">
            <CloseButton onClick={onClose}>✕</CloseButton>

            <ScrollLock />
            <KeypressListener keyName="Escape" handler={onClose} />
            {children}
          </Overlay>
        </Wrapper>
      </CSSTransition>

      <Backdrop isOpen={isOpen} onClick={onClose} />
    </>
  );
};

export default Modal;
