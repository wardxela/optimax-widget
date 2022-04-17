import { Screens, Screen } from 'services/screens';
import { Gender } from './screens/Gender';
import { Greeting } from './screens/Greeting';
import { EyeWearType } from './screens/EyeWearType';
import { VisionCorrection } from './screens/VisionCorrection';
import { SuggestVisionCorrection } from './screens/SuggestVisionCorrection';
import { FrameSize } from './screens/FrameSize';
import { FrameSizeAlt } from './screens/FrameSizeAlt';

export function Main() {
  return (
    <Screens>
      <Screen element={<Greeting />} />
      <Screen element={<Gender />} />
      <Screen element={<EyeWearType />} />
      <Screen>
        <SuggestVisionCorrection />
        <VisionCorrection />
      </Screen>
      <Screen>
        <FrameSize />
        <FrameSizeAlt />
      </Screen>
    </Screens>
  );
}
