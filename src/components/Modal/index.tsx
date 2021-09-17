import { useRef } from 'react';
import { Transition } from 'react-transition-group';

import KeypressListener from '../KeypressListener';
import Button from '../Button';
import Backdrop from '../Backdrop';

import { Overlay, ANIMATION_DURATION } from './styles';

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
    <Transition in={isOpen} timeout={ANIMATION_DURATION} unmountOnExit>
      {state => (
        <div ref={wrapperRef}>
          <Overlay isOpen={state == 'entered'}>
            <Button onClick={onClose}>✕</Button>
            {children}
          </Overlay>

          <Backdrop isOpen={state == 'entered'} onClick={onClose} />
          <KeypressListener keyName="Escape" handler={onClose} />
        </div>
      )}
    </Transition>
  );
};

export default Modal;
