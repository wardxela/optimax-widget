import { useEffect, useRef } from 'react';

export function usePrev<T>(state: T): T | null {
  const prev = useRef<T | null>(null);

  useEffect(() => {
    prev.current = state;
  }, [state]);

  return prev.current;
}
