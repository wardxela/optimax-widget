import { Screen } from '../screens';
import { Gender } from './screens/Gender';
import { Greeting } from './screens/Greeting';
import { GlassesType } from './screens/GlassesType';

export function Main() {
  return (
    <>
      <Screen name="greeting" component={<Greeting />} />
      <Screen name="gender" component={<Gender />} />
      <Screen name="glasses-type" component={<GlassesType />} />
      <Screen name="fourth" component={<div>fourth</div>} />
    </>
  );
}
