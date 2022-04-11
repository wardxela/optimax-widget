import _imgSunglasses from '../../assets/img/sunglasses.png';
import _imgEyeglasses from '../../assets/img/eyeglasses.png';
import { useNextScreen } from '../../screens/hooks';

export function EyeWearType() {
  const next = useNextScreen();

  const goNext = () => {
    next();
  };

  return (
    <section className="OWMain OWMain_Common">
      <div className="OWMain-Container OWMain-Container_Common">
        <h2 className="OWMain-Title-2 OWHelper-appear_0 OWHelper-mt-26 OWHelper-mb-32">
          What type of glasses are you looking for?
        </h2>
        <div className="OWMain-Options OWMain-Options_gap14">
          <button
            className="OWOption OWOption_middle OWHelper-p-30 OWHelper-appear_1"
            onClick={goNext}
          >
            <div className="OWOption-Column">
              <img
                src={_imgEyeglasses}
                alt="Eyeglasses"
                className="OWOption-Image OWHelper-mb-15"
              />
              <span className="OWOption-Desc">Eyeglasses</span>
            </div>
          </button>
          <button
            className="OWOption OWOption_middle OWHelper-p-30 OWHelper-appear_2"
            onClick={goNext}
          >
            <div className="OWOption-Column">
              <img
                src={_imgSunglasses}
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
