import { useSwitcher } from 'services/screens';
import { useContext } from 'react';
import { SurveyContext } from 'context/survey';
import { FaceShapeEnum, GenderEnum } from 'context/options';
import { FaceShape as FaceShapeType } from 'context/types';
import _imgLongMaleFace from 'assets/img/face-shape/long-male-face.png';
import _imgRoundMaleFace from 'assets/img/face-shape/round-male-face.png';
import _imgInBetweenMaleFace from 'assets/img/face-shape/in-between-male-face.png';
import _imgLongFemaleFace from 'assets/img/face-shape/long-female-face.png';
import _imgRoundFemaleFace from 'assets/img/face-shape/round-female-face.png';
import _imgInBetweenFemaleFace from 'assets/img/face-shape/in-between-female-face.png';

export function FaceShape() {
  const switcher = useSwitcher();
  const { gender, setFaceShape } = useContext(SurveyContext);

  let gap: string;
  let padding: string;
  let decorator: string = '';
  let fz: string = '';

  switch (gender) {
    case GenderEnum.Men:
      gap = 'OWOption-Row_Gap-50';
      padding = 'OWPadding-10-30';
      decorator = 'OWOption-Decorator_27';
      break;
    case GenderEnum.Women:
      gap = 'OWOption-Row_Gap-45';
      padding = 'OWPadding-10-23';
      break;
    default:
      gap = 'OWOption-Row_Gap-30';
      padding = 'OWPadding-10-23';
      decorator = 'OWOption-Decorator_15';
      fz = 'OWOption-Desc_Middle';
  }

  const produceHandler = (option: FaceShapeType) => {
    return () => {
      setFaceShape(option);
      switcher(1);
    };
  };

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWWidth-243 OWMarginTop-25 OWMarginBottom-40">
          Every face shape has a perfect fit. What’s yours?
        </h2>
        <div className="OWOptions OWMarginBottom-30 OWOptions_gap-14">
          <button
            className={`OWOption OWOption_Widest OWHeight-89 OWAppear_1 ${padding}`}
            onClick={produceHandler(FaceShapeEnum.Long)}
          >
            <div className={`OWOption-Row ${gap}`}>
              <div className={`OWOption-Decorator ${decorator}`}>
                {gender === null ? (
                  <div className="OWOption-FaceImages">
                    <img
                      draggable="false"
                      src={_imgLongMaleFace}
                      alt="Long face"
                      className="OWOption-Image"
                    />
                    <img
                      draggable="false"
                      src={_imgLongFemaleFace}
                      alt="Long face"
                      className="OWOption-Image"
                    />
                  </div>
                ) : (
                  <img
                    draggable="false"
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
              <span className={`OWOption-Desc ${fz}`}>I have a long face</span>
            </div>
          </button>
          <button
            className={`OWOption OWOption_Widest OWHeight-89 OWAppear_2 ${padding}`}
            onClick={produceHandler(FaceShapeEnum.Round)}
          >
            <div className={`OWOption-Row ${gap}`}>
              <div className={`OWOption-Decorator ${decorator}`}>
                {gender === null ? (
                  <div className="OWOption-FaceImages">
                    <img
                      draggable="false"
                      src={_imgRoundMaleFace}
                      alt="Round face"
                      className="OWOption-Image"
                    />
                    <img
                      draggable="false"
                      src={_imgRoundFemaleFace}
                      alt="Round face"
                      className="OWOption-Image"
                    />
                  </div>
                ) : (
                  <img
                    draggable="false"
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
              <span className={`OWOption-Desc ${fz}`}>I have a round face</span>
            </div>
          </button>
          <button
            className={`OWOption OWOption_Widest OWHeight-89 OWAppear_3 ${padding}`}
            onClick={produceHandler(FaceShapeEnum.Between)}
          >
            <div className={`OWOption-Row ${gap}`}>
              <div className={`OWOption-Decorator ${decorator}`}>
                {gender === null ? (
                  <div className="OWOption-FaceImages">
                    <img
                      draggable="false"
                      src={_imgInBetweenMaleFace}
                      alt="Long face"
                      className="OWOption-Image"
                    />
                    <img
                      draggable="false"
                      src={_imgInBetweenFemaleFace}
                      alt="Long face"
                      className="OWOption-Image"
                    />
                  </div>
                ) : (
                  <img
                    draggable="false"
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
              <span className={`OWOption-Desc ${fz}`}>In between</span>
            </div>
          </button>
        </div>
        <button
          className="OWMain-AltOption OWAppear_4"
          onClick={produceHandler(null)}
        >
          I don’t know
        </button>
      </div>
    </section>
  );
}
