import { useTimeoutBetweenScreens } from 'services/screens';
import { Loader } from '../Loader';

export function VisionCorrection() {
  const isWaiting = useTimeoutBetweenScreens();

  return isWaiting ? (
    <Loader text="Let's get to know you!" />
  ) : (
    <>Something...</>
  );
}
