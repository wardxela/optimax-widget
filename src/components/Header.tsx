import { MouseEvent, useContext } from 'react';
import { context, useScreenSwitcher } from '../screens';
import { usePrev } from '../hooks/abstract';
import _imgRight from '../assets/img/right-arrow.svg';
import _imgLeft from '../assets/img/left-arrow.svg';
import _imgExit from '../assets/img/exit.svg';
import _imgLogo from '../assets/img/Optimax.png';

const maxProgressShift = 10;

const getProgressShift = (progress: number): string => {
  return `${(progress * 100) / maxProgressShift - 100}%`;
};

export function Header() {
  const { progress, screen } = useContext(context);

  const switchScreen = useScreenSwitcher();

  const prevProgress = usePrev(progress);
  const prevScreen = usePrev(screen);

  // Button handlers
  const goNext = (event: MouseEvent<HTMLButtonElement>) => {
    switchScreen('gender', 1);
  };

  const goBack = (event: MouseEvent<HTMLButtonElement>) => {
    if (prevScreen === null || prevProgress === null) {
      switchScreen('greeting', 0);
    } else {
      switchScreen(prevScreen, prevProgress);
    }
  };

  const goToFirst = (event: MouseEvent<HTMLButtonElement>) => {
    switchScreen('greeting', 0);
  };

  return (
    <header className="OWHeader">
      {screen === 'greeting' ? (
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
              {progress}/{maxProgressShift}
            </div>
            <button className="OWHeader-Button" onClick={goToFirst}>
              <img className="OWHheader-ButtonImg" src={_imgExit} alt="Exit" />
            </button>
          </div>
          <div className="OWHeader-Progress">
            <span
              className="OWHeader-ProgressCompleted"
              style={{ transform: `translateX(${getProgressShift(progress)})` }}
            ></span>
          </div>
        </>
      )}
    </header>
  );
}
