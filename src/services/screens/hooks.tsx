import { useContext, useEffect, useState } from 'react';
import { ScreenContext } from './core';

export function useTimeoutBetweenScreens(ms: number): boolean {
  const { prev, current } = useContext(ScreenContext);
  const [isWaiting, setIsWaiting] = useState<boolean>(
    prev === null ||
      (prev[0] === current[0] ? prev[1] < current[1] : prev[0] < current[0])
  );

  useEffect(() => {
    if (isWaiting) {
      let timeoutId = setTimeout(() => {
        setIsWaiting(false);
      }, ms);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isWaiting, ms]);

  return isWaiting;
}

export function useSwitcher() {
  const { setCurrent, _numberOfScreens } = useContext(ScreenContext);

  return (direction: number, skipNested: boolean = false) => {
    setCurrent(prevScreen => {
      if (direction === 0) {
        return [0, 0];
      }

      const [prevMainPos, prevSubPos] = prevScreen;
      const prevNumberOfScreens = _numberOfScreens[prevMainPos];
      let nextSubPos = prevSubPos + direction;

      if (
        prevNumberOfScreens === 1 ||
        nextSubPos < 0 ||
        nextSubPos === prevNumberOfScreens ||
        skipNested
      ) {
        return [prevMainPos + direction, 0];
      }

      return [prevMainPos, nextSubPos];
    });
  };
}
