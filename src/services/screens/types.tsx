import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ScreenProviderProps {
  children: ReactNode;
}

export interface ScreensProps {
  children: ReactNode;
}

export type ScreenProps = {
  children?: ReactNode;
  element?: JSX.Element;
};

export interface ScreenContextInterface {
  current: number[];
  prev: number[] | null;
  amount: number;
  _numberOfScreens: number[];
  setCurrent: Dispatch<SetStateAction<number[]>>;
  setAmount: Dispatch<SetStateAction<number>>;
  _setNumberOfScreens: Dispatch<SetStateAction<number[]>>;
}
