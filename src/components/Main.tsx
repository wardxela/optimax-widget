import { Screen } from '../screens';
import { Gender } from './screens/Gender';
import { Greeting } from './screens/Greeting';

export function Main() {
  return (
    <>
      <Screen name="greeting" component={<Greeting />} />
      <Screen name="gender" component={<Gender />} />
      <Screen name="third" component={<div>third</div>} />
      <Screen name="fourth" component={<div>fourth</div>} />
    </>
  );
}
