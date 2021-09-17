import { useEffect } from 'react';

export interface KeypressListenerProps {
  /** Name of the key pressed */
  keyName: string;
  /** Callback when key is pressed */
  handler(event: KeyboardEvent): void;
}

const KeypressListener = ({
  keyName,
  handler,
}: KeypressListenerProps): null => {
  useEffect(() => {
    const handleKeyEvent = (event: KeyboardEvent) => {
      if (event.key == keyName) {
        handler(event);
      }
    };

    window.addEventListener('keyup', handleKeyEvent);
    return () => window.removeEventListener('keyup', handleKeyEvent);
  }, [keyName, handler]);

  return null;
};

export default KeypressListener;
