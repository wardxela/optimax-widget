import { useTimeoutBetweenScreens } from 'services/screens';
import { Loader } from 'components/Loader';

export function FrameSizeAlt() {
  const isWaiting = useTimeoutBetweenScreens(2000);

  if (isWaiting) {
    return <Loader text="No worries, we’ve got you!" />;
  }

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWWidth-210 OWMarginTop-25 OWMarginBottom-30">
          How wide would you say your face is?
        </h2>
        <div className="OWOptions OWOptions_gap-12">
          <button className="OWOption OWOption_Wider OWHeight-84 OWAppear_1">
            <span className="OWOption-Desc">Wider Than Average</span>
          </button>
          <button className="OWOption OWOption_Wider OWHeight-84 OWAppear_2">
            <span className="OWOption-Desc">Average</span>
          </button>
          <button className="OWOption OWOption_Wider OWHeight-84 OWAppear_3">
            <span className="OWOption-Desc">Narrower Than Average</span>
          </button>
        </div>
        <button className="OWMain-AltOption OWAppear_4">I’m not sure</button>
      </div>
    </section>
  );
}
