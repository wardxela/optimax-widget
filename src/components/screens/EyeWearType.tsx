import { useContext } from 'react';
import { SurveyContext } from 'context/survey';
import { GenderEnum, EyeWearTypeEnum } from 'context/options';
import { useSwitcher } from 'services/screens';
import { EyeWearType as EyeWearTypeContract } from 'context/types';
import _imgMenSunglasses from 'assets/img/glasses-type/men-sunglasses.png';
import _imgMenEyeglasses from 'assets/img/glasses-type/men-eyeglasses.png';
import _imgWomenSunglasses from 'assets/img/glasses-type/women-sunglasses.png';
import _imgWomenEyeglasses from 'assets/img/glasses-type/women-eyeglasses.png';

export function EyeWearType() {
  const switcher = useSwitcher();
  const { gender, setEyeWearType } = useContext(SurveyContext);

  const produceHandler = (option: EyeWearTypeContract) => {
    return () => {
      setEyeWearType(option);
      switcher(1);
    };
  };

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-25 OWMarginBottom-30 OWWidth-243">
          What type of glasses are you looking for?
        </h2>
        <div className="OWOptions OWMarginBottom-30 OWOptions_gap-14">
          <button
            className="OWOption OWHeight-138 OWPadding-25 OWAppear_1"
            onClick={produceHandler(EyeWearTypeEnum.Eyeglasses)}
          >
            <div className="OWOption-Column">
              <img
                src={
                  gender === GenderEnum.Women
                    ? _imgWomenEyeglasses
                    : _imgMenEyeglasses
                }
                alt="Eyeglasses"
                className="OWOption-Image OWMarginBottom-15"
              />
              <span className="OWOption-Desc">Eyeglasses</span>
            </div>
          </button>
          <button
            className="OWOption OWHeight-138 OWPadding-25 OWAppear_2"
            onClick={produceHandler(EyeWearTypeEnum.Sunglasses)}
          >
            <div className="OWOption-Column">
              <img
                src={
                  gender === GenderEnum.Women
                    ? _imgWomenSunglasses
                    : _imgMenSunglasses
                }
                alt="Sunglasses"
                className="OWOption-Image OWMarginBottom-15"
              />
              <span className="OWOption-Desc">Sunglasses</span>
            </div>
          </button>
        </div>
        <button
          className="OWMain-AltOption OWAppear_3"
          onClick={produceHandler(null)}
        >
          I want to see both
        </button>
      </div>
    </section>
  );
}
