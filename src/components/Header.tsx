import { MouseEvent, useContext } from 'react';
import { context, useScreenSwitcher } from '../screens';
import _imgRight from '../assets/img/right-arrow.svg';
import _imgLeft from '../assets/img/left-arrow.svg';
import _imgExit from '../assets/img/exit.svg';
import _imgLogo from '../assets/img/Optimax.png';

export function Header() {
  const { progress, screen } = useContext(context);

  const switchScreen = useScreenSwitcher();

  const goNext = (event: MouseEvent<HTMLButtonElement>) => {
    switchScreen('second', 2);
  };

  const maxProgressShift = 10;
  const progressShift = `${(progress * 100) / maxProgressShift - 100}%`;

  return (
    <header className="OWHeader">
      {screen === 'greeting' ? (
        <div className="OWHeader-Body">
          <img src={_imgLogo} alt="Optimax DEV" className="OWHeader-Logo" />
          <button className="OWheader-Button" onClick={goNext}>
            <img src={_imgRight} alt="Go" />
          </button>
        </div>
      ) : (
        <>
          <div className="OWHeader-Body">
            <button className="OWHeader-Button">
              <img src={_imgLeft} alt="Back" />
            </button>
            <div className="OWHeader-Completed">
              {progress}/{maxProgressShift}
            </div>
            <button className="OWHeader-Button">
              <img src={_imgExit} alt="Exit" />
            </button>
          </div>
          <div className="OWHeader-Progress">
            <span
              className="OWHeader-ProgressCompleted"
              style={{ transform: `translateX(${progressShift})` }}
            ></span>
          </div>
        </>
      )}
    </header>
  );
}
