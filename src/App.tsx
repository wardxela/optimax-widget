import { StrictMode } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { State } from './context';

interface AppProps {
  source: string;
}

export function App({ source }: AppProps) {
  return (
    <StrictMode>
      <State source={source}>
        <Header />
        <Main />
      </State>
    </StrictMode>
  );
}
