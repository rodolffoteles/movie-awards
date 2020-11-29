import React, { useState } from 'react';
import api from '../../services/api';
import { ReactComponent as MagnifierIcon } from '../../assets/magnifier.svg';
import { Wrapper, InputField } from './styles';

const SearchBar = ({ setSearchResult }) => {
  const [input, setInput] = useState('');

  const handleInput = async event => {
    if (event.key === 'Enter') {
      const response = await api.get('/', {
        params: { s: input },
      });
      console.log(response);

      if (response.status === 200) {
        setSearchResult(response.data.search);
      }
    }
  };

  return (
    <Wrapper>
      <InputField
        type="text"
        placeholder="Movie title"
        onChange={event => setInput(event.target.value)}
        onKeyPress={handleInput}
      ></InputField>
      <MagnifierIcon />
    </Wrapper>
  );
};

export default SearchBar;
