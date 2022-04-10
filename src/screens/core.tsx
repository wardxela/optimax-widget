import { useState, createContext, useContext, useEffect } from 'react';
import { IScreenContext, ScreenContextProps, ScreensProps } from './types.d';

export const context = createContext<IScreenContext>({
  current: 0,
  amount: 0,
  setCurrent: () => {},
  setAmount: () => {},
});

export function ScreenContext({ children }: ScreenContextProps) {
  const [current, setCurrent] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <context.Provider value={{ current, amount, setCurrent, setAmount }}>
      {children}
    </context.Provider>
  );
}

export function Screens({ children }: ScreensProps) {
  const { current, setAmount } = useContext(context);

  const hasChildren = Array.isArray(children);

  useEffect(() => {
    if (hasChildren) {
      setAmount(children.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hasChildren) {
    for (const index in children) {
      if (+index === current) {
        return children[index];
      }
    }
  }

  return null;
}
