import { ReactNode } from 'react';

export interface ISurveyContext {
  gender: 4 | 5 | null;
  eyeWearType: 210 | 211 | null;
  lensType: 6 | 7 | null;
  frameSize: 68 | 67 | 66 | null;
  blueLight: boolean | null;
  shade: 'dark' | 'light' | 'transition' | null;
  faceShape: 'long' | 'round' | 'between' | null;
  facialFeatures: 'sharp' | 'rounded' | 'between' | null;
  shape: string[];
  brand: string[];

  getDestinationURL: () => string;
}

export interface SurveyContextProps {
  children: ReactNode;
  source: string;
}
