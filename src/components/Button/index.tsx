import { Wrapper } from './styles';

export interface ButtonProps {
  /** The content to display inside the button */
  children?: string;
  /** Callback when clicked */
  onClick?(): void;
  /** Icon to display to the left of the button content */
  icon?: React.ReactElement | string;
  /** Renders a button that looks more like a plain text */
  plain?: boolean;
  /** Outilines the button */
  outline?: boolean;
  /** The size of the button */
  size?: 'small' | 'medium' | 'large';
  /** Disables the button, disallowing interaction */
  disabled?: boolean;
  /** Color schema of the button */
  color?: 'primary' | 'danger';
}

const Button = ({
  onClick,
  children,
  icon,
  plain,
  outline,
  color = 'primary',
  size = 'medium',
  disabled,
}: ButtonProps): JSX.Element => {
  const iconOnly = icon != null && children == null;

  return (
    <Wrapper
      disabled={disabled}
      outline={outline}
      onClick={onClick}
      $color={color}
      plain={plain}
      size={size}
      iconOnly={iconOnly}
    >
      {icon}
      {children}
    </Wrapper>
  );
};

export default Button;
