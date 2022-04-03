import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/index.scss';

const container = document.getElementById('glasses-quiz-widget') as HTMLElement;

const root = createRoot(container);

root.render(<App />);
