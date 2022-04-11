import { Screens } from '../screens';
import { Gender } from './screens/Gender';
import { Greeting } from './screens/Greeting';
import { GlassesType } from './screens/GlassesType';

export function Main() {
  return (
    <Screens>
      <Greeting />
      <Gender />
      <GlassesType />
    </Screens>
  );
}
