import { MouseEvent } from 'react';
import {
  useAmountOfScreens,
  useCurrentScreen,
  useSwitchToNext,
  useSwitchToPrev,
  useSwitchToFirst,
} from '../screens/hooks';
import _imgRight from '../assets/img/right-arrow.svg';
import _imgLeft from '../assets/img/left-arrow.svg';
import _imgExit from '../assets/img/exit.svg';
import _imgLogo from '../assets/img/Optimax.png';

const getProgress = (current: number, max: number): string => {
  return `${(current * 100) / max - 100}%`;
};

export function Header() {
  const screen = useCurrentScreen();
  const amountOfScreens = useAmountOfScreens() - 1;

  const next = useSwitchToNext();
  const prev = useSwitchToPrev();
  const first = useSwitchToFirst();

  // Button handlers
  const goNext = (event: MouseEvent<HTMLButtonElement>) => {
    next();
  };

  const goBack = (event: MouseEvent<HTMLButtonElement>) => {
    prev();
  };

  const goToFirst = (event: MouseEvent<HTMLButtonElement>) => {
    first();
  };

  return (
    <header className="OWHeader">
      {screen === 0 ? (
        <div className="OWHeader-Body">
          <img src={_imgLogo} alt="Optimax DEV" className="OWHeader-Logo" />
          <button className="OWHeader-Button" onClick={goNext}>
            <img src={_imgRight} alt="Go" />
          </button>
        </div>
      ) : (
        <>
          <div className="OWHeader-Body">
            <button className="OWHeader-Button" onClick={goBack}>
              <img className="OWHheader-ButtonImg" src={_imgLeft} alt="Back" />
            </button>
            <div className="OWHeader-Statistics">
              {screen}/{amountOfScreens}
            </div>
            <button className="OWHeader-Button" onClick={goToFirst}>
              <img className="OWHheader-ButtonImg" src={_imgExit} alt="Exit" />
            </button>
          </div>
          <div className="OWHeader-Progress">
            <span
              className="OWHeader-ProgressCompleted"
              style={{
                transform: `translateX(${getProgress(
                  screen,
                  amountOfScreens
                )})`,
              }}
            ></span>
          </div>
        </>
      )}
    </header>
  );
}
