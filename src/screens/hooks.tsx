import { useContext, useEffect, useState } from 'react';
import { context } from '.';

export function useCurrentScreen(): number {
  const { current } = useContext(context);

  return current;
}

export function useAmountOfScreens(): number {
  const { amount } = useContext(context);

  return amount;
}

export function useWaiting(): boolean {
  const { prev, current } = useContext(context);
  const [isWaiting, setIsWaiting] = useState<boolean>(
    typeof prev === 'number' && prev < current
  );

  useEffect(() => {
    if (isWaiting) {
      setTimeout(() => {
        setIsWaiting(false);
      }, 2000);
    }
  }, [isWaiting]);

  return isWaiting;
}

export function useSwitchToNext() {
  const { setCurrent } = useContext(context);

  return () => {
    setCurrent(prevScreen => {
      return prevScreen + 1;
    });
  };
}

export function useSwitchToPrev() {
  const { setCurrent } = useContext(context);

  return () => {
    setCurrent(prevScreen => {
      return prevScreen - 1;
    });
  };
}

export function useSwitchToFirst() {
  const { setCurrent } = useContext(context);

  return () => {
    setCurrent(0);
  };
}
