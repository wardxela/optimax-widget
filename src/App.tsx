import { Header, Main } from 'components';
import { State } from 'context';

interface AppProps {
  source: string;
}

export function App({ source }: AppProps) {
  return (
    <State source={source}>
      <Header />
      <Main />
    </State>
  );
}
