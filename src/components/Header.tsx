import { useContext } from 'react';
import { ScreenContext, useSwitcher } from 'services/screens';
import { useSurveyCleanUp } from 'context/survey';
import _imgRight from 'assets/img/icons/right-arrow.svg';
import _imgLeft from 'assets/img/icons/left-arrow.svg';
import _imgExit from 'assets/img/icons/exit.svg';
import _imgLogo from 'assets/img/Optimax.png';

const getProgress = (current: number, max: number): string => {
  return `calc(${(current * 100) / max - 100}% - 1px)`;
};

export function Header() {
  const { current: screen, amount: amountOfScreens } =
    useContext(ScreenContext);

  const switcher = useSwitcher();
  const surveyCleaner = useSurveyCleanUp();

  const restart = () => {
    surveyCleaner();
    switcher(0);
  };

  if (screen[0] === 0) {
    return (
      <header className="OWHeader">
        <div className="OWHeader-Body">
          <img
            draggable="false"
            src={_imgLogo}
            alt="Optimax DEV"
            className="OWHeader-Logo"
          />
          <button className="OWHeader-Button" onClick={() => switcher(1)}>
            <img draggable="false" src={_imgRight} alt="Next" />
          </button>
        </div>
      </header>
    );
  }

  if (screen[0] === amountOfScreens - 1) {
    return (
      <header className="OWHeader">
        <div className="OWHeader-Body">
          <img
            draggable="false"
            src={_imgLogo}
            alt="Optimax DEV"
            className="OWHeader-Logo"
          />
          <button className="OWHeader-Button" onClick={restart}>
            <img
              draggable="false"
              src={_imgExit}
              alt="Start from the beginning"
            />
          </button>
        </div>
        <div className="OWHeader-Progress">
          <span
            className="OWHeader-ProgressCompleted"
            style={{
              transform: `translateX(${getProgress(
                screen[0],
                amountOfScreens - 1
              )})`,
            }}
          ></span>
        </div>
      </header>
    );
  }

  return (
    <header className="OWHeader">
      <div className="OWHeader-Body">
        <button className="OWHeader-Button" onClick={() => switcher(-1)}>
          <img
            draggable="false"
            className="OWHeader-ButtonImg"
            src={_imgLeft}
            alt="Previous"
          />
        </button>
        <div className="OWHeader-Statistics">
          {screen[0]}/{amountOfScreens - 2}
        </div>
        <button className="OWHeader-Button" onClick={restart}>
          <img
            draggable="false"
            className="OWHeader-ButtonImg"
            src={_imgExit}
            alt="Exit"
          />
        </button>
      </div>
      <div className="OWHeader-Progress">
        <span
          className="OWHeader-ProgressCompleted"
          style={{
            transform: `translateX(${getProgress(
              screen[0],
              amountOfScreens - 1
            )})`,
          }}
        ></span>
      </div>
    </header>
  );
}
