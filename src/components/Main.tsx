import { Screens } from '../screens';
import { Gender } from './screens/Gender';
import { Greeting } from './screens/Greeting';
import { EyeWearType } from './screens/EyeWearType';

export function Main() {
  return (
    <Screens>
      <Greeting />
      <Gender />
      <EyeWearType />
    </Screens>
  );
}
