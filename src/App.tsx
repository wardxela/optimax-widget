import { StrictMode } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { ScreenContext } from './screens/core';

export function App() {
  return (
    <StrictMode>
      <ScreenContext>
        <Header />
        <Main />
      </ScreenContext>
    </StrictMode>
  );
}
