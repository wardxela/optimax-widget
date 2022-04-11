import { createRoot } from 'react-dom/client';
import { App } from './App';
import './assets/scss/index.scss';

const container = document.getElementById('glasses-quiz-widget');

if (container instanceof HTMLElement) {
  const root = createRoot(container);

  root.render(
    <App source={container.dataset.source ?? 'https://example.com/'} />
  );
}
