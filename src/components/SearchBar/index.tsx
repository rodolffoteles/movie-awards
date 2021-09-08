import React from 'react';
import { ReactComponent as MagnifierIcon } from '../../assets/svg/magnifier.svg';

import { Wrapper } from './styles';

interface SearchBarProps {
  /** Hint text to display */
  placeholder?: string;
  /** Initial value for the input */
  value?: string;
  /** Callback when value is changed */
  onChange?(value: string): void;
}

const SearchBar = ({
  placeholder,
  onChange,
  value = '',
}: SearchBarProps): JSX.Element => {
  const hangleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange?.(event.target.value);

  return (
    <Wrapper>
      <input
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
