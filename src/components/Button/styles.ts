import styled from 'styled-components';
import type { ButtonProps } from './index';

interface WrapperProps
  extends Pick<ButtonProps, 'plain' | 'disabled' | 'size' | 'outline'> {
  $color: NonNullable<ButtonProps['color']>;
  iconOnly: boolean;
}

export const Wrapper = styled.button<WrapperProps>`
  background: ${props => {
    if (props.plain || props.outline) {
      return 'none';
    }

    return props.theme.colors[props.$color].default;
  }};

  border: ${props => {
    if (!props.outline) {
      return 'none';
    }

    return `2px solid #ffffff`;
  }};

  border-radius: 50%;
  cursor: pointer;
  display: flex;
  color: ${props => props.theme.colors.white};
  font-size: 1.5rem;

  padding: ${props => {
    if (props.size == 'small') return '0.5rem';
    if (props.size == 'medium') return '0.7rem';
    if (props.size == 'large') return '0.9rem';
  }};

  transition: background 150ms ease-out;

  &:hover {
    background: ${props => props.theme.colors[props.$color].light};
  }

  &:focus {
    background: ${props => props.theme.colors[props.$color].default};
  }

  svg {
    height: ${props => {
      if (props.size == 'small') return '0.7rem';
      if (props.size == 'medium') return '1rem';
      if (props.size == 'large') return '1.2rem';
    }};

    width: ${props => {
      if (props.size == 'small') return '0.7rem';
      if (props.size == 'medium') return '1rem';
      if (props.size == 'large') return '1.2rem';
    }};

    fill: currentColor;
    stroke: currentColor;
  }
`;
