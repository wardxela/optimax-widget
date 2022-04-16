import { useContext, useEffect, useState } from 'react';
import { context } from './core';

export function useTimeoutBetweenScreens(): boolean {
  const { prev, current } = useContext(context);
  const [isWaiting, setIsWaiting] = useState<boolean>(
    typeof prev === 'number' && prev < current
  );

  useEffect(() => {
    if (isWaiting) {
      let timeoutId = setTimeout(() => {
        setIsWaiting(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isWaiting]);

  return isWaiting;
}

export function useSwitcher() {
  const { setCurrent } = useContext(context);

  return (direction: number) => {
    setCurrent(prevScreen => {
      if (direction === 0) {
        return 0;
      }
      return prevScreen + direction;
    });
  };
}
