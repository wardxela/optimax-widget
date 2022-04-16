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
    <section className="OWMain OWMain_Common">
      <div className="OWMain-Container OWMain-Container_Common">
        <h2 className="OWMain-Title-2 OWHelper-appear_0 OWHelper-mt-26 OWHelper-mb-32">
          Do you need vision correction?
        </h2>
        <div className="OWMain-Options OWMain-Options_gap14">
          <button
            className="OWOption OWOption_middle OWHelper-p-36 OWHelper-appear_1"
            onClick={confirmSuggestion}
          >
            <span className="OWOption-Desc">Yes</span>
          </button>
          <button className="OWOption OWOption_middle OWHelper-p-36 OWHelper-appear_2">
            <span className="OWOption-Desc">No</span>
          </button>
        </div>
        <button className="OWMain-SecondButton OWHelper-appear_3">Skip</button>
      </div>
    </section>
  );
}

function MainScreen() {
  return (
    <section className="OWMain OWMain_Common">
      <div className="OWMain-Container OWMain-Container_Common">
        <h2 className="OWMain-Title-2 OWHelper-appear_0 OWHelper-mt-26 OWHelper-mb-32">
          What do you need your glasses for?
        </h2>
        <div className="OWMain-Options OWMain-Options_gap14">
          <button className="OWOption OWOption_middle OWHelper-p-36 OWHelper-appear_1">
            <span className="OWOption-Desc">Near Vision</span>
          </button>
          <button className="OWOption OWOption_middle OWHelper-p-36 OWHelper-appear_2">
            <span className="OWOption-Desc">Distance Vision</span>
          </button>
          <button className="OWOption OWOption_middle OWHelper-p-36 OWHelper-appear_3">
            <span className="OWOption-Desc">Multifocal / Progressive</span>
          </button>
        </div>
        <button className="OWMain-SecondButton OWHelper-appear_3">Skip</button>
      </div>
    </section>
  );
}
