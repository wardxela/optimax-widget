import { createContext, useState } from 'react';
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
  eyewear_type: null,
  lenstype: null,
  frame_size: null,
  blue_light: null,
  shade: null,
  face_shape: null,
  facial_features: null,
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
});

export function SurveyProvider({ children }: SurveyProviderProps) {
  const [gender, setGender] = useState<Gender>(null);
  const [eyewear_type, setEyeWearType] = useState<EyeWearType>(null);
  const [lenstype, setLensType] = useState<LensType>(null);
  const [frame_size, setFrameSize] = useState<FrameSize>(null);
  const [blue_light, setBlueLight] = useState<BlueLight>(null);
  const [shade, setShade] = useState<Shade>(null);
  const [face_shape, setFaceShape] = useState<FaceShape>(null);
  const [facial_features, setFacialFeatures] = useState<FacialFeatures>(null);
  const [shape, setShape] = useState<Shape>([]);
  const [brand, setBrand] = useState<Brand>([]);

  return (
    <SurveyContext.Provider
      value={{
        // State
        gender,
        eyewear_type,
        lenstype,
        frame_size,
        blue_light,
        shade,
        face_shape,
        facial_features,
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
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}
