import { useContext, useState } from 'react';
import { useSwitcher, useTimeoutBetweenScreens } from 'services/screens';
import { Loader } from '../Loader';
import { LensType } from 'context/types';
import { context as surveyContext } from 'context/survey';
import { LensTypeEnum } from 'context/options';

interface SuggestionProps {
  confirmSuggestion: () => void;
}

export function VisionCorrection() {
  const [showSuggestion, setShowSuggestion] = useState<boolean>(true);
  const isWaiting = useTimeoutBetweenScreens();

  const confirmSuggestion = () => {
    setShowSuggestion(false);
  };

  if (isWaiting) {
    return <Loader text="Let's get to know you!" />;
  }

  if (showSuggestion) {
    return <Suggestion confirmSuggestion={confirmSuggestion} />;
  }

  return <MainScreen />;
}

function Suggestion({ confirmSuggestion }: SuggestionProps) {
  const switcher = useSwitcher();

  const goNext = () => {
    switcher(1);
  };

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-25 OWMarginBottom-30">
          Do you need vision correction?
        </h2>
        <div className="OWOptions OWOptions_gap-14">
          <button
            className="OWOption OWHeight-117 OWAppear_1"
            onClick={confirmSuggestion}
          >
            <span className="OWOption-Desc">Yes</span>
          </button>
          <button className="OWOption OWHeight-117 OWAppear_2" onClick={goNext}>
            <span className="OWOption-Desc">No</span>
          </button>
        </div>
        <button className="OWMain-AltOption OWAppear_3" onClick={goNext}>
          Skip
        </button>
      </div>
    </section>
  );
}

function MainScreen() {
  const switcher = useSwitcher();
  const { setLensType } = useContext(surveyContext);

  const produceHandler = (option: LensType) => {
    return () => {
      switcher(1);
      setLensType(option);
    };
  };

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-25 OWMarginBottom-30">
          What do you need your glasses for?
        </h2>
        <div className="OWOptions OWOptions_gap-14">
          <button
            className="OWOption OWOption_Wider OWHeight-84 OWAppear_1"
            onClick={produceHandler(LensTypeEnum.NearVision)}
          >
            <span className="OWOption-Desc">Near Vision</span>
          </button>
          <button
            className="OWOption OWOption_Wider OWHeight-84 OWAppear_2"
            onClick={produceHandler(LensTypeEnum.DistanceVision)}
          >
            <span className="OWOption-Desc">Distance Vision</span>
          </button>
          <button
            className="OWOption OWOption_Wider OWHeight-84 OWAppear_3"
            onClick={produceHandler(LensTypeEnum.MultifocalOrProgressive)}
          >
            <span className="OWOption-Desc">Multifocal / Progressive</span>
          </button>
        </div>
        <button
          className="OWMain-AltOption OWAppear_3"
          onClick={produceHandler(null)}
        >
          Skip
        </button>
      </div>
    </section>
  );
}
