import { createContext, useState } from 'react';
import { ISurveyContext, SurveyContextProps } from './types.d';

export const context = createContext<ISurveyContext>({
  gender: null,
  eyeWearType: null,
  lensType: null,
  frameSize: null,
  blueLight: null,
  shade: null,
  faceShape: null,
  facialFeatures: null,
  shape: [],
  brand: [],

  getDestinationURL: () => '',
});

export function SurveyContext({ children, source }: SurveyContextProps) {
  const [gender, setGender] = useState(null);
  const [eyeWearType, setEyeWearType] = useState(null);
  const [lensType, setLensType] = useState(null);
  const [frameSize, setFrameSize] = useState(null);
  const [blueLight, setBlueLight] = useState(null);
  const [shade, setShade] = useState(null);
  const [faceShape, setFaceShape] = useState(null);
  const [facialFeatures, setFacialFeatures] = useState(null);
  const [shape, setShape] = useState([]);
  const [brand, setBrand] = useState([]);

  const getDestinationURL = () => {
    try {
      const url = new URL(source);
      return url.toString();
    } catch (e) {
      return 'error';
    }
  };

  return (
    <context.Provider
      value={{
        gender,
        eyeWearType,
        lensType,
        frameSize,
        blueLight,
        shade,
        faceShape,
        facialFeatures,
        shape,
        brand,
        getDestinationURL,
      }}
    >
      {children}
    </context.Provider>
  );
}
