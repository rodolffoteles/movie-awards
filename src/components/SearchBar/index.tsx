import React from 'react';
import { ReactComponent as MagnifierIcon } from '../../assets/magnifier.svg';

import { Wrapper } from './styles';

interface SearchBarProps {
  placeholder: string;
  onChange(value: string): void;
  value: string;
}

const SearchBar = ({ placeholder, onChange, value }: SearchBarProps) => {
  const hangleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.value);

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
