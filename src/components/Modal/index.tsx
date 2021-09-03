import Overlay from '../Overlay';
import Button from '../Button';
import Backdrop from '../Backdrop';

import { Wrapper } from './styles';

interface ModalProps {
  /** The content to display inside the modal */
  children: React.ReactNode;
  /** Whether the modal is open or not */
  isOpen: boolean;
  /** Callback when the modal is closed */
  onClose(): void;
}

const Modal = ({ isOpen, onClose, children }: ModalProps): JSX.Element => {
  return (
    <Overlay onClose={onClose}>
      <Wrapper isOpen={isOpen}>
        <Button onClick={onClose}>✕</Button>
        {children}
      </Wrapper>

      <Backdrop isOpen={isOpen} onClick={onClose} />
    </Overlay>
  );
};

export default Modal;
