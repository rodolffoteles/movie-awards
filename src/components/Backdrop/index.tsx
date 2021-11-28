import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Wrapper, TRANSITION_DURATION } from './styles';

interface BackdropProps {
  /** Whether the backdrop is visible or not */
  isOpen: boolean;
  /** Callback when clicked */
  onClick(): void;
}

const Backdrop = ({ isOpen, onClick }: BackdropProps): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      in={isOpen}
      timeout={TRANSITION_DURATION}
      nodeRef={wrapperRef}
      unmountOnExit
    >
      <Wrapper ref={wrapperRef} onClick={onClick} />
    </CSSTransition>
  );
};

export default Backdrop;
