import React from 'react';
import { ReactComponent as Magnifier } from '../../assets/magnifier.svg';
import { Wrapper, InputField } from './styles';

const SearchBar = () => {
  return (
    <Wrapper>
      <Magnifier />
      <InputField type="text" placeholder="Movie title"></InputField>
    </Wrapper>
  );
};

export default SearchBar;
