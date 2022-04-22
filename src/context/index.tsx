import { ReactNode } from 'react';
import { ScreenProvider } from 'services/screens';
import { SurveyProvider } from './survey';

interface StateProps {
  children: ReactNode;
}

export function State({ children }: StateProps) {
  return (
    <SurveyProvider>
      <ScreenProvider>{children}</ScreenProvider>
    </SurveyProvider>
  );
}
