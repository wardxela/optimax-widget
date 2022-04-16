import { useState } from 'react';
import { useTimeoutBetweenScreens } from 'services/screens';
import { Loader } from 'components/Loader';
import _imgSizes from 'assets/img/sizes.png';

interface MainScreenProps {
  show: () => void;
}

function MainScreen({ show }: MainScreenProps) {
  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWWidth-210 OWMarginTop-25 OWMarginBottom-40">
          What’s your current frame size?
        </h2>
        <img
          src={_imgSizes}
          alt="Sizes"
          className="OWMain-Image OWWidth-318 OWMarginBottom-35 OWAppear_0"
        />
        <div className="OWOptions OWOptions_gap-12">
          <button className="OWOption OWOption_Widest OWHeight-56 OWAppear_1">
            <div className="OWOption-Row OWOption-Row_SpaceBetween OWPadding-0-17">
              <span className="OWOption-Desc OWOption-Desc_Regular">Small</span>
              <span className="OWOption-Desc OWOption-Desc_Bold">42-48 mm</span>
            </div>
          </button>
          <button className="OWOption OWOption_Widest OWHeight-56 OWAppear_2">
            <div className="OWOption-Row OWOption-Row_SpaceBetween OWPadding-0-17">
              <span className="OWOption-Desc OWOption-Desc_Regular">
                Medium
              </span>
              <span className="OWOption-Desc OWOption-Desc_Bold">49-53 mm</span>
            </div>
          </button>
          <button className="OWOption OWOption_Widest OWHeight-56 OWAppear_3">
            <div className="OWOption-Row OWOption-Row_SpaceBetween OWPadding-0-17">
              <span className="OWOption-Desc OWOption-Desc_Regular">Large</span>
              <span className="OWOption-Desc OWOption-Desc_Bold">54-58 mm</span>
            </div>
          </button>
        </div>
        <button className="OWMain-AltOption OWAppear_4" onClick={show}>
          Skip
        </button>
      </div>
    </section>
  );
}

function SubScreen() {
  const isWaiting = useTimeoutBetweenScreens();

  if (isWaiting) {
    return <Loader text="No worries, we’ve got you!" />;
  }

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWWidth-210 OWMarginTop-25 OWMarginBottom-30">
          How wide would you say your face is?
        </h2>
        <div className="OWOptions OWOptions_gap-12">
          <button className="OWOption OWOption_Wider OWHeight-84 OWAppear_1">
            <span className="OWOption-Desc">Wider Than Average</span>
          </button>
          <button className="OWOption OWOption_Wider OWHeight-84 OWAppear_2">
            <span className="OWOption-Desc">Average</span>
          </button>
          <button className="OWOption OWOption_Wider OWHeight-84 OWAppear_3">
            <span className="OWOption-Desc">Narrower Than Average</span>
          </button>
        </div>
        <button className="OWMain-AltOption OWAppear_4">I’m not sure</button>
      </div>
    </section>
  );
}

export function FrameSize() {
  const [showSubScreen, setShowSubScreen] = useState<boolean>(false);

  const show = () => {
    setShowSubScreen(true);
  };

  if (showSubScreen) {
    return <SubScreen />;
  }

  return <MainScreen show={show} />;
}
