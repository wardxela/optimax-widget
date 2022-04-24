import { useSwitcher, useTimeoutBetweenScreens } from 'services/screens';
import { Loader } from 'components/Loader';
import { useContext } from 'react';
import { SurveyContext } from 'context/survey';
import { FrameSize } from 'context/types';
import { FrameSizeEnum } from 'context/options';

export function FrameSizeAlt() {
  const isWaiting = useTimeoutBetweenScreens(2000);
  const { setFrameSize } = useContext(SurveyContext);
  const switcher = useSwitcher();

  const produceHandler = (option: FrameSize) => {
    return () => {
      switcher(1);
      setFrameSize(option);
    };
  };

  if (isWaiting) {
    return <Loader text="No worries, we’ve got you!" />;
  }

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWWidth-210 OWMarginTop-25 OWMarginBottom-30">
          How wide would you say your face is?
        </h2>
        <div className="OWOptions OWMarginBottom-30 OWOptions_gap-12">
          <button
            className="OWOption OWOption_Wider OWHeight-84 OWAppear_1"
            onClick={produceHandler(FrameSizeEnum.WiderThanAverage)}
          >
            <span className="OWOption-Desc">Wider Than Average</span>
          </button>
          <button
            className="OWOption OWOption_Wider OWHeight-84 OWAppear_2"
            onClick={produceHandler(FrameSizeEnum.Average)}
          >
            <span className="OWOption-Desc">Average</span>
          </button>
          <button
            className="OWOption OWOption_Wider OWHeight-84 OWAppear_3"
            onClick={produceHandler(FrameSizeEnum.NarrowerThanAverage)}
          >
            <span className="OWOption-Desc">Narrower Than Average</span>
          </button>
        </div>
        <button
          className="OWMain-AltOption OWAppear_4"
          onClick={produceHandler(null)}
        >
          I’m not sure
        </button>
      </div>
    </section>
  );
}
