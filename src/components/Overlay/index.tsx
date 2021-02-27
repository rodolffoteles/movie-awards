import React, { useCallback, useEffect } from 'react';

interface OverlayProps {
  children: React.ReactNode;
  onClose(): void;
}

const Overlay = ({ children, onClose }: OverlayProps) => {
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
