import { ReactNode } from 'react';
import { ScreenProvider } from 'services/screens';
import { SurveyProvider } from './survey';

interface StateProps {
  children: ReactNode;
  source: string;
}

export function State({ children, source }: StateProps) {
  return (
    <SurveyProvider source={source}>
      <ScreenProvider>{children}</ScreenProvider>
    </SurveyProvider>
  );
}
