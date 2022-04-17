import { useState, createContext, useContext, useEffect } from 'react';
import {
  ScreenContextInterface,
  ScreenProviderProps,
  ScreenProps,
  ScreensProps,
} from './types';
import { usePrev } from 'hooks/usePrev';

export const ScreenContext = createContext<ScreenContextInterface>({
  current: [0, 0],
  prev: null,
  amount: 0,
  _numberOfScreens: [1],
  setCurrent: () => {},
  setAmount: () => {},
  _setNumberOfScreens: () => {},
});

export function ScreenProvider({ children }: ScreenProviderProps) {
  const [current, setCurrent] = useState([0, 0]);
  const [amount, setAmount] = useState(0);
  const [_numberOfScreens, _setNumberOfScreens] = useState([1]);

  const prev = usePrev(current);

  return (
    <ScreenContext.Provider
      value={{
        current,
        prev,
        amount,
        _numberOfScreens,
        setCurrent,
        setAmount,
        _setNumberOfScreens,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
}

export function Screens({ children }: ScreensProps) {
  const { current, setAmount, _setNumberOfScreens } = useContext(ScreenContext);
  const [init, setInit] = useState(false);

  const hasChildren = Array.isArray(children);

  useEffect(() => {
    if (hasChildren && !init) {
      _setNumberOfScreens(
        children.map(child => {
          if (child.props.children) {
            return child.props.children.length;
          }
          return 1;
        })
      );
      setAmount(children.length);
      setInit(true);
    }
  }, []);

  if (hasChildren && children[current[0]]) {
    return children[current[0]];
  }

  return null;
}

export function Screen({ children, element }: ScreenProps) {
  const { current } = useContext(ScreenContext);

  if (element !== undefined) {
    return element;
  }

  if (Array.isArray(children) && children[current[1]]) {
    return children[current[1]];
  }

  return null;
}
