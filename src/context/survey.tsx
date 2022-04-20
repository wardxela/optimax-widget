import { createContext, useEffect, useState } from 'react';
import {
  BlueLight,
  Brand,
  EyeWearType,
  FaceShape,
  FacialFeatures,
  FrameSize,
  Gender,
  SurveyContextInterface,
  LensType,
  Shade,
  Shape,
  SurveyProviderProps,
} from './types';

export const SurveyContext = createContext<SurveyContextInterface>({
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

  setGender: () => {},
  setEyeWearType: () => {},
  setLensType: () => {},
  setFrameSize: () => {},
  setBlueLight: () => {},
  setShade: () => {},
  setFaceShape: () => {},
  setFacialFeatures: () => {},
  setShape: () => {},
  setBrand: () => {},
  getDestinationURL: () => '',
});

export function SurveyProvider({ children, source }: SurveyProviderProps) {
  const [gender, setGender] = useState<Gender>(null);
  const [eyeWearType, setEyeWearType] = useState<EyeWearType>(null);
  const [lensType, setLensType] = useState<LensType>(null);
  const [frameSize, setFrameSize] = useState<FrameSize>(null);
  const [blueLight, setBlueLight] = useState<BlueLight>(null);
  const [shade, setShade] = useState<Shade>(null);
  const [faceShape, setFaceShape] = useState<FaceShape>(null);
  const [facialFeatures, setFacialFeatures] = useState<FacialFeatures>(null);
  const [shape, setShape] = useState<Shape>([]);
  const [brand, setBrand] = useState<Brand>([]);

  // only for tests

  // useEffect(() => {
  //   console.log(gender);
  //   console.log(eyeWearType);
  //   console.log(lensType);
  //   console.log(frameSize);
  //   console.log(blueLight);
  //   console.log(shade);
  //   console.log(faceShape);
  //   console.log(facialFeatures);
  //   console.log(shape);
  //   console.log(brand);
  // });

  const getDestinationURL = () => {
    try {
      const url = new URL(source);
      return url.toString();
    } catch (e) {
      return 'error';
    }
  };

  return (
    <SurveyContext.Provider
      value={{
        // State
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

        // Setters
        setGender,
        setEyeWearType,
        setLensType,
        setFrameSize,
        setBlueLight,
        setShade,
        setFaceShape,
        setFacialFeatures,
        setShape,
        setBrand,

        getDestinationURL,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}
