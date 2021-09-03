import { Wrapper } from './styles';

interface ButtonProps {
  /** The content to display inside the button */
  children?: string;
  /** Callback when clicked */
  onClick?(): void;
}

const Button = ({ onClick, children }: ButtonProps): JSX.Element => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default Button;
