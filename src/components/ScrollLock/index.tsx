import { useEffect } from 'react';

const ScrollLock = (): null => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  return null;
};

export default ScrollLock;
