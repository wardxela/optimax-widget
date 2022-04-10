import { useContext } from 'react';
import { context } from './core';

export function useCurrentScreen(): number {
  const { current } = useContext(context);

  return current;
}

export function useAmountOfScreens(): number {
  const { amount } = useContext(context);

  return amount;
}

export function useNextScreen() {
  const { setCurrent } = useContext(context);

  return () => {
    setCurrent(prevScreen => {
      return prevScreen + 1;
    });
  };
}

export function usePrevScreen() {
  const { setCurrent } = useContext(context);

  return () => {
    setCurrent(prevScreen => {
      return prevScreen - 1;
    });
  };
}

export function useFirstScreen() {
  const { setCurrent } = useContext(context);

  return () => {
    setCurrent(0);
  };
}
