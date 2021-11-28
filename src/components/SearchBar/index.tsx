import React, { useRef, useEffect } from 'react';
import { ReactComponent as MagnifierIcon } from '../../assets/svg/magnifier.svg';

import { Wrapper } from './styles';

interface SearchBarProps {
  /** Hint text to display */
  placeholder?: string;
  /** Initial value for the input */
  value?: string;
  /** Force the focus state on the input */
  focused?: boolean;
  /** Callback when value is changed */
  onChange?(value: string): void;
}

const SearchBar = ({
  placeholder,
  onChange,
  focused,
  value = '',
}: SearchBarProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (!input || focused === undefined) return;
    focused ? input.focus() : input.blur();
  }, [focused]);

  const hangleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange?.(event.target.value);

  return (
    <Wrapper>
      <input
        ref={inputRef}
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={hangleChange}
      />
      <MagnifierIcon />
    </Wrapper>
  );
};

export default SearchBar;
