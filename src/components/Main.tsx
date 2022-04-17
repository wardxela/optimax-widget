import { Screens, Screen } from 'services/screens';
import { Gender } from './screens/Gender';
import { Greeting } from './screens/Greeting';
import { EyeWearType } from './screens/EyeWearType';
import { VisionCorrection } from './screens/VisionCorrection';
import { SuggestVisionCorrection } from './screens/SuggestVisionCorrection';
import { FrameSize } from './screens/FrameSize';
import { FrameSizeAlt } from './screens/FrameSizeAlt';
import { KindOfProtection } from './screens/KindOfProtection';
import { FaceShape } from './screens/FaceShape';

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
      <Screen element={<KindOfProtection />} />
      <Screen element={<FaceShape />} />
    </Screens>
  );
}
