import { Screens } from 'services/screens';
import { Gender } from './screens/Gender';
import { Greeting } from './screens/Greeting';
import { EyeWearType } from './screens/EyeWearType';
import { VisionCorrection } from './screens/VisionCorrection';
import { FrameSize } from './screens/FrameSize';

export function Main() {
  return (
    <Screens>
      <Greeting />
      <Gender />
      <EyeWearType />
      <VisionCorrection />
      <FrameSize />
    </Screens>
  );
}
