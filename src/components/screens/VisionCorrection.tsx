import { useState } from 'react';
import { useTimeoutBetweenScreens } from 'services/screens';
import { Loader } from '../Loader';

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
  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-25 OWMarginBottom-30">
          Do you need vision correction?
        </h2>
        <div className="OWOptions OWOptions_gap14">
          <button
            className="OWOption OWHeight-117 OWAppear_1"
            onClick={confirmSuggestion}
          >
            <span className="OWOption-Desc">Yes</span>
          </button>
          <button className="OWOption OWHeight-117 OWAppear_2">
            <span className="OWOption-Desc">No</span>
          </button>
        </div>
        <button className="OWMain-AltOption OWAppear_3">Skip</button>
      </div>
    </section>
  );
}

function MainScreen() {
  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-25 OWMarginBottom-30">
          What do you need your glasses for?
        </h2>
        <div className="OWOptions OWOptions_gap14">
          <button className="OWOption OWOption_Wider OWHeight-84 OWAppear_1">
            <span className="OWOption-Desc">Near Vision</span>
          </button>
          <button className="OWOption OWOption_Wider OWHeight-84 OWAppear_2">
            <span className="OWOption-Desc">Distance Vision</span>
          </button>
          <button className="OWOption OWOption_Wider OWHeight-84 OWAppear_3">
            <span className="OWOption-Desc">Multifocal / Progressive</span>
          </button>
        </div>
        <button className="OWMain-AltOption OWAppear_3">Skip</button>
      </div>
    </section>
  );
}
