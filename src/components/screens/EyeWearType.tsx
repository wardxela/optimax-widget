import { useContext } from 'react';
import { context } from '../../context/survey';
import { GenderEnum } from '../../context/options';
import { useSwitchToNext } from '../../screens/hooks';
import _imgMenSunglasses from '../../assets/img/men-sunglasses.png';
import _imgMenEyeglasses from '../../assets/img/men-eyeglasses.png';
import _imgWomenSunglasses from '../../assets/img/women-sunglasses.png';
import _imgWomenEyeglasses from '../../assets/img/women-eyeglasses.png';

export function EyeWearType() {
  const next = useSwitchToNext();
  const { gender } = useContext(context);

  const goNext = () => {
    next();
  };

  return (
    <section className="OWMain OWMain_Common">
      <div className="OWMain-Container OWMain-Container_Common">
        <h2 className="OWMain-Title-2 OWHelper-appear_0 OWHelper-mt-26 OWHelper-mb-32 OWHelper-maw-243">
          What type of glasses are you looking for?
        </h2>
        <div className="OWMain-Options OWMain-Options_gap14">
          <button
            className="OWOption OWOption_middle OWHelper-p-36 OWHelper-appear_1"
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
                className="OWOption-Image OWHelper-mb-15"
              />
              <span className="OWOption-Desc">Eyeglasses</span>
            </div>
          </button>
          <button
            className="OWOption OWOption_middle OWHelper-p-36 OWHelper-appear_2"
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
                className="OWOption-Image OWHelper-mb-15"
              />
              <span className="OWOption-Desc">Sunglasses</span>
            </div>
          </button>
        </div>
        <button
          className="OWMain-SecondButton OWHelper-appear_3"
          onClick={goNext}
        >
          I want to see both
        </button>
      </div>
    </section>
  );
}
