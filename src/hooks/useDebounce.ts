import { useRef, useCallback } from 'react';

export default function useDebounce<
  T extends (...args: any[]) => ReturnType<T>
>(func: T, delay: number) {
  const timeout = useRef<number>();

  return useCallback(
    (...args: Parameters<T>): void => {
      const later = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = window.setTimeout(later, delay);
    },
    [func, delay]
  );
}
