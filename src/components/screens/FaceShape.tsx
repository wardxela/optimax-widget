import { useSwitcher } from 'services/screens';
import { useContext, useEffect, useState } from 'react';
import { SurveyContext } from 'context/survey';
import _imgLongMaleFace from 'assets/img/long-male-face.png';
import _imgRoundMaleFace from 'assets/img/round-male-face.png';
import _imgInBetweenMaleFace from 'assets/img/in-between-male-face.png';
import _imgLongFemaleFace from 'assets/img/long-female-face.png';
import _imgRoundFemaleFace from 'assets/img/round-female-face.png';
import _imgInBetweenFemaleFace from 'assets/img/in-between-female-face.png';
import { GenderEnum } from 'context/options';

export function FaceShape() {
  const switcher = useSwitcher();
  const { gender } = useContext(SurveyContext);
  const [padding, setPadding] = useState('');
  const [gap, setGap] = useState('');

  useEffect(() => {
    switch (gender) {
      case GenderEnum.Men:
        setGap('OWOption-Row_Gap-50');
        setPadding('OWPadding-10-30');
        break;
      case GenderEnum.Women:
        setGap('OWOption-Row_Gap-45');
        setPadding('OWPadding-10-23');
        break;
      default:
        setGap('OWOption-Row_Gap-30');
        setPadding('OWPadding-10-23');
    }
  }, [gender]);

  const produceHandler = () => {
    return () => {};
  };

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWWidth-243 OWMarginTop-25 OWMarginBottom-40">
          Every face shape has a perfect fit. What’s yours?
        </h2>
        <div className="OWOptions OWOptions_gap-14">
          <button
            className={`OWOption OWOption_Widest OWHeight-89 OWAppear_1 ${padding}`}
            onClick={produceHandler()}
          >
            <div className={`OWOption-Row ${gap}`}>
              <div className="OWOption-Decorator OWOption-Decorator_27">
                {gender === null ? (
                  <div className="OWOption-FaceImages">
                    <img
                      src={_imgLongMaleFace}
                      alt="Long face"
                      className="OWOption-Image"
                    />
                    <img
                      src={_imgLongFemaleFace}
                      alt="Long face"
                      className="OWOption-Image"
                    />
                  </div>
                ) : (
                  <img
                    src={
                      gender === GenderEnum.Men
                        ? _imgLongMaleFace
                        : _imgLongFemaleFace
                    }
                    alt="Long face"
                    className="OWOption-Image"
                  />
                )}
              </div>
              <span className="OWOption-Desc">I have a long face</span>
            </div>
          </button>
          <button
            className={`OWOption OWOption_Widest OWHeight-89 OWAppear_2 ${padding}`}
            onClick={produceHandler()}
          >
            <div className={`OWOption-Row ${gap}`}>
              <div className="OWOption-Decorator OWOption-Decorator_27">
                {gender === null ? (
                  <div className="OWOption-FaceImages">
                    <img
                      src={_imgRoundMaleFace}
                      alt="Round face"
                      className="OWOption-Image"
                    />
                    <img
                      src={_imgRoundFemaleFace}
                      alt="Round face"
                      className="OWOption-Image"
                    />
                  </div>
                ) : (
                  <img
                    src={
                      gender === GenderEnum.Men
                        ? _imgRoundMaleFace
                        : _imgRoundFemaleFace
                    }
                    alt="Long face"
                    className="OWOption-Image"
                  />
                )}
              </div>
              <span className="OWOption-Desc">I have a round face</span>
            </div>
          </button>
          <button
            className={`OWOption OWOption_Widest OWHeight-89 OWAppear_3 ${padding}`}
            onClick={produceHandler()}
          >
            <div className={`OWOption-Row ${gap}`}>
              <div className="OWOption-Decorator OWOption-Decorator_27">
                {gender === null ? (
                  <div className="OWOption-FaceImages">
                    <img
                      src={_imgInBetweenMaleFace}
                      alt="Long face"
                      className="OWOption-Image"
                    />
                    <img
                      src={_imgInBetweenFemaleFace}
                      alt="Long face"
                      className="OWOption-Image"
                    />
                  </div>
                ) : (
                  <img
                    src={
                      gender === GenderEnum.Men
                        ? _imgInBetweenMaleFace
                        : _imgInBetweenFemaleFace
                    }
                    alt="Long face"
                    className="OWOption-Image"
                  />
                )}
              </div>
              <span className="OWOption-Desc">In between</span>
            </div>
          </button>
        </div>
        <button
          className="OWMain-AltOption OWAppear_4"
          onClick={() => switcher(1)}
        >
          I don’t know
        </button>
      </div>
    </section>
  );
}
