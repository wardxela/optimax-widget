import { Screen } from '../screens';

export function Main() {
  return (
    <>
      <Screen
        init
        name="greeting"
        component={<div>greeting</div>}
        progress={1}
      />
      <Screen name="second" component={<div>second</div>} progress={1} />
      <Screen name="third" component={<div>third</div>} progress={1} />
      <Screen name="fourth" component={<div>fourth</div>} progress={1} />
    </>
  );
}
