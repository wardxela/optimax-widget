import { Dispatch, ReactNode, SetStateAction } from 'react';
import {
  EyeWearTypeEnum,
  FaceShapeEnum,
  FacialFeaturesEnum,
  FrameSizeEnum,
  GenderEnum,
  LensTypeEnum,
  ShadeEnum,
} from './options';

export type Gender = GenderEnum | null;
export type EyeWearType = EyeWearTypeEnum | null;
export type LensType = LensTypeEnum | null;
export type FrameSize = FrameSizeEnum | null;
export type BlueLight = boolean | null;
export type Shade = ShadeEnum | null;
export type FaceShape = FaceShapeEnum | null;
export type FacialFeatures = FacialFeaturesEnum | null;
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