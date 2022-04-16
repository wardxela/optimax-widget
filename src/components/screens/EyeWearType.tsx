import { useContext } from 'react';
import { context } from 'context/survey';
import { GenderEnum } from 'context/options';
import { useSwitcher } from 'services/screens';
import _imgMenSunglasses from 'assets/img/men-sunglasses.png';
import _imgMenEyeglasses from 'assets/img/men-eyeglasses.png';
import _imgWomenSunglasses from 'assets/img/women-sunglasses.png';
import _imgWomenEyeglasses from 'assets/img/women-eyeglasses.png';

export function EyeWearType() {
  const switcher = useSwitcher();
  const { gender } = useContext(context);

  const goNext = () => {
    switcher(1);
  };

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-25 OWMarginBottom-30 OWWidth-243">
          What type of glasses are you looking for?
        </h2>
        <div className="OWOptions OWOptions_gap14">
          <button
            className="OWOption OWHeight-138 OWPadding-25 OWAppear_1"
            onClick={goNext}
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
            onClick={goNext}
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
        <button className="OWMain-AltOption OWAppear_3" onClick={goNext}>
          I want to see both
        </button>
      </div>
    </section>
  );
}
