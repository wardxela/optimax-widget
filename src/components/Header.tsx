import { useContext } from 'react';
import { ScreenContext, useSwitcher } from 'services/screens';
import _imgRight from 'assets/img/right-arrow.svg';
import _imgLeft from 'assets/img/left-arrow.svg';
import _imgExit from 'assets/img/exit.svg';
import _imgLogo from 'assets/img/Optimax.png';

const getProgress = (current: number, max: number): string => {
  return `${(current * 100) / max - 100}%`;
};

export function Header() {
  const { current: screen, amount: amountOfScreens } =
    useContext(ScreenContext);

  const switcher = useSwitcher();

  // Button handlers
  const goNext = () => {
    switcher(1);
  };

  const goBack = () => {
    switcher(-1);
  };

  const goToFirst = () => {
    switcher(0);
  };

  return (
    <header className="OWHeader">
      {screen[0] === 0 ? (
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
              <img className="OWHeader-ButtonImg" src={_imgLeft} alt="Back" />
            </button>
            <div className="OWHeader-Statistics">
              {screen[0]}/{amountOfScreens - 1}
            </div>
            <button className="OWHeader-Button" onClick={goToFirst}>
              <img className="OWHeader-ButtonImg" src={_imgExit} alt="Exit" />
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
        </>
      )}
    </header>
  );
}
