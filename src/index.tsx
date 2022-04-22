import { createRoot } from 'react-dom/client';
import { Header, Main } from 'components';
import { State } from 'context';
import 'assets/scss/index.scss';

const container = document.getElementById('glasses-quiz-widget');

if (container instanceof HTMLElement) {
  const root = createRoot(container);

  root.render(
    <State source={container.dataset.source ?? 'https://example.com/'}>
      <Header />
      <Main />
    </State>
  );
}
