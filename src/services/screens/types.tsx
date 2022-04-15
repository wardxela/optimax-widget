import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ScreenContextProps {
  children: ReactNode;
}

export interface ScreensProps {
  children: ReactNode;
}

export interface IScreenContext {
  current: number;
  prev: number | null;
  amount: number;
  setCurrent: Dispatch<SetStateAction<number>>;
  setAmount: Dispatch<SetStateAction<number>>;
}