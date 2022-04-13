import { Screens } from '../screens';
import { Gender } from './screens/Gender';
import { Greeting } from './screens/Greeting';
import { EyeWearType } from './screens/EyeWearType';
import { Loader } from './Loader';

export function Main() {
  return (
    <Screens>
      <Greeting />
      <Gender />
      <EyeWearType />
      <Loader text="Let's get to know you!" />
    </Screens>
  );
}
