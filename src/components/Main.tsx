import { Screen } from '../screens';
import { Greeting } from './screens/Greeting';

export function Main() {
  return (
    <>
      <Screen name="greeting" component={<Greeting />} />
      <Screen name="second" component={<div>second</div>} />
      <Screen name="third" component={<div>third</div>} />
      <Screen name="fourth" component={<div>fourth</div>} />
    </>
  );
}
