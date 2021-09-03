import React, { useCallback, useEffect } from 'react';

interface OverlayProps {
  /** The content to display inside the overlay */
  children: React.ReactNode;
  /** Callback when the overlay is closed */
  onClose(): void;
}

const Overlay = ({ children, onClose }: OverlayProps): JSX.Element => {
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
