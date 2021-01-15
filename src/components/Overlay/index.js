import React, { useCallback, useEffect } from 'react';

const Overlay = ({ children, onClose }) => {
  const handleKeyUp = useCallback(
    event => {
      if (event.key === 'Escape') {
        onClose();
        window.removeEventListener('keyup', handleKeyUp, false);
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    return () => window.removeEventListener('keyup', handleKeyUp, false);
  }, [handleKeyUp]);

  return <>{children}</>;
};

export default Overlay;
