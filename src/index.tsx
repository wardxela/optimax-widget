import { createRoot } from 'react-dom/client';
import { containerId } from 'config';
import { Header, Main } from 'components';
import { StateProvider } from 'context';
import 'assets/scss/index.scss';

const container = document.getElementById(containerId);

if (container instanceof HTMLElement) {
  const root = createRoot(container);

  root.render(
    <StateProvider>
      <Header />
      <Main />
    </StateProvider>
  );
}
