import { Header } from './components/Header';
import { Main } from './components/Main';
import { ScreenContext } from './screens';

export function App() {
  return (
    <ScreenContext initScreen="greeting" initProgressValue={1}>
      <Header />
      <Main />
    </ScreenContext>
  );
}
