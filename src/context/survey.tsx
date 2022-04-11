import { createContext, useState } from 'react';
import {
  BlueLight,
  Brand,
  EyeWearType,
  FaceShape,
  FacialFeatures,
  FrameSize,
  Gender,
  ISurveyContext,
  LensType,
  Shade,
  Shape,
  SurveyContextProps,
} from './types.d';

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

export function SurveyContext({ children, source }: SurveyContextProps) {
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
    </context.Provider>
  );
}
