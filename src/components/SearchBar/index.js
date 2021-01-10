import React from 'react';
import { ReactComponent as MagnifierIcon } from '../../assets/magnifier.svg';
import { Wrapper } from './styles';

const SearchBar = ({ placeholder, onChangeText, value }) => {
  const hangleChange = event => onChangeText(event.target.value);

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
