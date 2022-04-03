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
  initScreen: string;
  initProgressValue: number;
  children: ReactNode;
}

interface ScreenProps {
  name: string;
  component: ReactElement;
}

interface Context {
  screen: string;
  progress: number;
  setScreen: Dispatch<SetStateAction<string>>;
  setProgress: Dispatch<SetStateAction<number>>;
}

type ScreenSwitcher = (screen: string, progress: number) => void;

export const context = createContext<Context>({
  screen: '',
  progress: 0,
  setScreen: () => null,
  setProgress: () => null,
});

export function ScreenContext({
  children,
  initScreen,
  initProgressValue,
}: ScreenContextProps) {
  const [screen, setScreen] = useState(initScreen);
  const [progress, setProgress] = useState(initProgressValue);

  return (
    <context.Provider value={{ screen, setScreen, progress, setProgress }}>
      {children}
    </context.Provider>
  );
}

export function Screen({ name, component }: ScreenProps) {
  const { screen } = useContext(context);

  if (screen === name) {
    return component;
  }

  return null;
}

export function useScreenSwitcher(): ScreenSwitcher {
  const { setScreen, setProgress } = useContext(context);

  return (screen, progress) => {
    setScreen(screen);
    setProgress(progress);
  };
}
