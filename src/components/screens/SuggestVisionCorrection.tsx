import { Loader } from 'components/Loader';
import { useSwitcher, useTimeoutBetweenScreens } from 'services/screens';

export function SuggestVisionCorrection() {
  const switcher = useSwitcher();
  const isWaiting = useTimeoutBetweenScreens(2000);

  if (isWaiting) {
    return <Loader text="Let's get to know you!" />;
  }

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-25 OWMarginBottom-30">
          Do you need vision correction?
        </h2>
        <div className="OWOptions OWOptions_gap-14">
          <button
            className="OWOption OWHeight-117 OWAppear_1"
            onClick={() => switcher(1)}
          >
            <span className="OWOption-Desc">Yes</span>
          </button>
          <button
            className="OWOption OWHeight-117 OWAppear_2"
            onClick={() => switcher(1, true)}
          >
            <span className="OWOption-Desc">No</span>
          </button>
        </div>
        <button
          className="OWMain-AltOption OWAppear_3"
          onClick={() => switcher(1, true)}
        >
          Skip
        </button>
      </div>
    </section>
  );
}
