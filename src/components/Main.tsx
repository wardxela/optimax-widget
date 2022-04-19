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
import { FacialFeatures } from './screens/FacialFeatures';
import { FrameStyle } from './screens/FrameStyle';
import { SuggestBrands } from './screens/SuggestBrands';
import { ChooseBrands } from './screens/ChooseBrands';
import { FinalScreen } from './screens/FinalScreen';

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
      <Screen element={<FacialFeatures />} />
      <Screen element={<FrameStyle />} />
      <Screen element={<SuggestBrands />} />
      <Screen element={<ChooseBrands />} />
      <Screen element={<FinalScreen />} />
    </Screens>
  );
}
