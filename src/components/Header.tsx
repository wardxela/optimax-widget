import { useContext } from 'react';
import { ScreenContext, useSwitcher } from 'services/screens';
import _imgRight from 'assets/img/icons/right-arrow.svg';
import _imgLeft from 'assets/img/icons/left-arrow.svg';
import _imgExit from 'assets/img/icons/exit.svg';
import _imgLogo from 'assets/img/Optimax.png';

const getProgress = (current: number, max: number): string => {
  return `${(current * 100) / max - 100}%`;
};

export function Header() {
  const { current: screen, amount: amountOfScreens } =
    useContext(ScreenContext);

  const switcher = useSwitcher();

  if (screen[0] === 0) {
    return (
      <header className="OWHeader">
        <div className="OWHeader-Body">
          <img src={_imgLogo} alt="Optimax DEV" className="OWHeader-Logo" />
          <button className="OWHeader-Button" onClick={() => switcher(1)}>
            <img src={_imgRight} alt="Next" />
          </button>
        </div>
      </header>
    );
  }

  if (screen[0] === amountOfScreens - 1) {
    return (
      <header className="OWHeader">
        <div className="OWHeader-Body">
          <img src={_imgLogo} alt="Optimax DEV" className="OWHeader-Logo" />
          <button className="OWHeader-Button" onClick={() => switcher(0)}>
            <img src={_imgExit} alt="Start from the beginning" />
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
          <img className="OWHeader-ButtonImg" src={_imgLeft} alt="Previous" />
        </button>
        <div className="OWHeader-Statistics">
          {screen[0]}/{amountOfScreens - 2}
        </div>
        <button className="OWHeader-Button" onClick={() => switcher(0)}>
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
    </header>
  );
}
