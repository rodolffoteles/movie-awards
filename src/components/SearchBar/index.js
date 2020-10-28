import React from 'react';
import { ReactComponent as MagnifierIcon } from '../../assets/magnifier.svg';
import { Wrapper, InputField } from './styles';

const SearchBar = () => {
  return (
    <Wrapper>
      <InputField type="text" placeholder="Movie title"></InputField>
      <MagnifierIcon />
    </Wrapper>
  );
};

export default SearchBar;
