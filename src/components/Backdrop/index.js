import React from 'react';

import { Wrapper } from './styles';

const Backdrop = ({ isOpen, onClick }) => {
  return <Wrapper isOpen={isOpen} onClick={onClick} />;
};

export default Backdrop;
