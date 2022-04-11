import { Dispatch, ReactNode, SetStateAction } from 'react';

export type Gender = 4 | 5 | null;
export type EyeWearType = 210 | 211 | null;
export type LensType = 6 | 7 | null;
export type FrameSize = 68 | 67 | 66 | null;
export type BlueLight = boolean | null;
export type Shade = 'dark' | 'light' | 'transition' | null;
export type FaceShape = 'long' | 'round' | 'between' | null;
export type FacialFeatures = 'sharp' | 'rounded' | 'between' | null;
export type Shape = string[];
export type Brand = string[];

export interface ISurveyContext {
  gender: Gender;
  eyeWearType: EyeWearType;
  lensType: LensType;
  frameSize: FrameSize;
  blueLight: BlueLight;
  shade: Shade;
  faceShape: FaceShape;
  facialFeatures: FacialFeatures;
  shape: Shape;
  brand: Brand;

  setGender: Dispatch<SetStateAction<Gender>>;
  setEyeWearType: Dispatch<SetStateAction<EyeWearType>>;
  setLensType: Dispatch<SetStateAction<LensType>>;
  setFrameSize: Dispatch<SetStateAction<FrameSize>>;
  setBlueLight: Dispatch<SetStateAction<BlueLight>>;
  setShade: Dispatch<SetStateAction<Shade>>;
  setFaceShape: Dispatch<SetStateAction<FaceShape>>;
  setFacialFeatures: Dispatch<SetStateAction<FacialFeatures>>;
  setShape: Dispatch<SetStateAction<Shape>>;
  setBrand: Dispatch<SetStateAction<Brand>>;

  getDestinationURL: () => string;
}

export interface SurveyContextProps {
  children: ReactNode;
  source: string;
}
