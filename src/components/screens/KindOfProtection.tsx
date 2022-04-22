import { EyeWearTypeEnum, ShadeEnum } from 'context/options';
import { SurveyContext } from 'context/survey';
import { BlueLight, Shade } from 'context/types';
import { useContext } from 'react';
import { useSwitcher } from 'services/screens';
import _imgDarkShade from 'assets/img/shade/dark-shade.png';
import _imgLightShade from 'assets/img/shade/light-shade.png';
import _imgTransitioningShade from 'assets/img/shade/transitioning-shade.png';

export function KindOfProtection() {
  const { eyewear_type, setBlueLight, setShade } = useContext(SurveyContext);
  const switcher = useSwitcher();

  const produceHandlerForEyeglasses = (option: BlueLight) => {
    return () => {
      setBlueLight(option);
      switcher(1);
    };
  };

  const produceHandlerForSunglasses = (option: Shade) => {
    return () => {
      setShade(option);
      switcher(1);
    };
  };

  if (eyewear_type === EyeWearTypeEnum.Sunglasses) {
    return (
      <section className="OWMain">
        <div className="OWMain-Container">
          <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-25 OWMarginBottom-30">
            When you’re out and about, which shade of lenses do you prefer?
          </h2>
          <div className="OWOptions OWOptions_gap-16">
            <button
              className="OWOption OWOption_Wider OWHeight-89 OWPadding-25 OWAppear_1"
              onClick={produceHandlerForSunglasses(ShadeEnum.DarkShade)}
            >
              <div className="OWOption-Row OWOption-Row_Gap-40">
                <div className="OWOption-Decorator">
                  <img
                    src={_imgDarkShade}
                    alt="Dark Shade"
                    className="OWOption-Image"
                  />
                </div>
                <span className="OWOption-Desc OWOption-Desc_Small">
                  Dark Shade
                </span>
              </div>
            </button>
            <button
              className="OWOption OWOption_Wider OWHeight-89 OWPadding-25 OWAppear_2"
              onClick={produceHandlerForSunglasses(ShadeEnum.LightShade)}
            >
              <div className="OWOption-Row OWOption-Row_Gap-40">
                <div className="OWOption-Decorator">
                  <img
                    src={_imgLightShade}
                    alt="Light Shade"
                    className="OWOption-Image"
                  />
                </div>
                <span className="OWOption-Desc OWOption-Desc_Small">
                  Light Shade
                </span>
              </div>
            </button>
            <button
              className="OWOption OWOption_Wider OWHeight-89 OWPadding-25 OWAppear_3"
              onClick={produceHandlerForSunglasses(
                ShadeEnum.TransitioningShade
              )}
            >
              <div className="OWOption-Row OWOption-Row_Gap-40">
                <div className="OWOption-Decorator">
                  <img
                    src={_imgTransitioningShade}
                    alt="Transitioning Shade"
                    className="OWOption-Image"
                  />
                </div>
                <span className="OWOption-Desc OWOption-Desc_Small">
                  Transitioning Shade
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-25 OWMarginBottom-30">
          Would you like to protect your eyes from light emanating from screens?
        </h2>
        <div className="OWOptions OWOptions_gap-14">
          <button
            className="OWOption OWHeight-138 OWAppear_1"
            onClick={produceHandlerForEyeglasses(true)}
          >
            <span className="OWOption-Desc">Yes</span>
          </button>
          <button
            className="OWOption OWHeight-138 OWAppear_2"
            onClick={produceHandlerForEyeglasses(false)}
          >
            <span className="OWOption-Desc">No</span>
          </button>
        </div>
      </div>
    </section>
  );
}
