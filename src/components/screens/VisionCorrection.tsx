import { useWaiting } from '../../screens/hooks';
import { Loader } from '../Loader';

export function VisionCorrection() {
  const isWaiting = useWaiting();

  return isWaiting ? (
    <Loader text="Let's get to know you!" />
  ) : (
    <>Waiting is completed</>
  );
}
