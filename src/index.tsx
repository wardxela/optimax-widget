import { createRoot } from 'react-dom/client';
import { Header, Main } from 'components';
import { State } from 'context';
import { containerId } from 'config';
import 'assets/scss/index.scss';

const container = document.getElementById(containerId);

if (container instanceof HTMLElement) {
  const root = createRoot(container);

  root.render(
    <State>
      <Header />
      <Main />
    </State>
  );
}
