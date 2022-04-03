import { Header } from './components/Header';
import { Main } from './components/Main';
import { ScreenContext } from './screens';

export function App() {
  return (
    <ScreenContext>
      <Header />
      <Main />
    </ScreenContext>
  );
}
