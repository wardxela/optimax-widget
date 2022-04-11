import { ReactNode } from 'react';
import { ScreenContext } from '../screens';
import { SurveyContext } from './survey';

interface StateProps {
  children: ReactNode;
  source: string;
}

export function State({ children, source }: StateProps) {
  return (
    <SurveyContext source={source}>
      <ScreenContext>{children}</ScreenContext>
    </SurveyContext>
  );
}
