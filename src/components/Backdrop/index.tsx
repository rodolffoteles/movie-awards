import { Wrapper } from './styles';

interface BackdropProps {
  /** Whether the backdrop is open or not */
  isOpen: boolean;
  /** Callback when clicked */
  onClick(): void;
}

const Backdrop = ({ isOpen, onClick }: BackdropProps): JSX.Element => {
  return <Wrapper isOpen={isOpen} onClick={onClick} />;
};

export default Backdrop;
