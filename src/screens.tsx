import {
  useState,
  createContext,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
  ReactElement,
} from 'react';

interface ScreenContextProps {
  children: ReactNode;
}

interface ScreenProps {
  name: string;
  component: ReactElement;
  progress: number;
  init?: boolean;
}

interface Context {
  screen: string;
  progress: number;
  setScreen: Dispatch<SetStateAction<string>>;
  setProgress: Dispatch<SetStateAction<number>>;
}

export const context = createContext<Context>({
  screen: '',
  progress: 0,
  setScreen: () => null,
  setProgress: () => null,
});

export function ScreenContext({ children }: ScreenContextProps) {
  const [screen, setScreen] = useState('');
  const [progress, setProgress] = useState(0);

  return (
    <context.Provider value={{ screen, setScreen, progress, setProgress }}>
      {children}
    </context.Provider>
  );
}

export function Screen({ name, component, progress, init }: ScreenProps) {
  const { screen, setScreen, setProgress } = useContext(context);
  const [initialization, setInitialization] = useState(true);

  if (init && initialization) {
    setScreen(name);
    setProgress(progress);
  }

  if (initialization) {
    setInitialization(false);
  }

  if (screen === name) {
    setProgress(progress);
    return component;
  }

  return null;
}
