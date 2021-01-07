import React, { useState } from 'react';
import api from '../../services/api';
import { ReactComponent as MagnifierIcon } from '../../assets/magnifier.svg';
import { Wrapper, InputField } from './styles';

const SearchBar = ({ setSearchResult, placeholder, onChange }) => {
  const [input, setInput] = useState('');

  const handleInput = async event => {
    if (event.key === 'Enter') {
      const response = await api.get('/', {
        params: { s: input },
      });

      if (response.status === 200) {
        setSearchResult(response.data.search);
      }
    }
  };

  return (
    <Wrapper>
      <input
        type="search"
        placeholder={placeholder}
        onChange={event => setInput(event.target.value)}
        onKeyPress={handleInput}
      ></input>
      <MagnifierIcon />
    </Wrapper>
  );
};

export default SearchBar;
