import _imgSizes from 'assets/img/sizes.png';
import { FrameSizeEnum } from 'context/options';
import { SurveyContext } from 'context/survey';
import { FrameSize as FrameSizeType } from 'context/types';
import { useContext } from 'react';
import { useSwitcher } from 'services/screens';

export function FrameSize() {
  const { setFrameSize } = useContext(SurveyContext);
  const switcher = useSwitcher();

  const produceHandler = (option: FrameSizeType) => {
    return () => {
      setFrameSize(option);
      switcher(1, true);
    };
  };

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
          <button
            className="OWOption OWOption_Widest OWHeight-56 OWAppear_1"
            onClick={produceHandler(FrameSizeEnum.Small)}
          >
            <div className="OWOption-Row OWOption-Row_SpaceBetween OWPadding-0-17">
              <span className="OWOption-Desc OWOption-Desc_Regular">Small</span>
              <span className="OWOption-Desc OWOption-Desc_Bold">42-48 mm</span>
            </div>
          </button>
          <button
            className="OWOption OWOption_Widest OWHeight-56 OWAppear_2"
            onClick={produceHandler(FrameSizeEnum.Medium)}
          >
            <div className="OWOption-Row OWOption-Row_SpaceBetween OWPadding-0-17">
              <span className="OWOption-Desc OWOption-Desc_Regular">
                Medium
              </span>
              <span className="OWOption-Desc OWOption-Desc_Bold">49-53 mm</span>
            </div>
          </button>
          <button
            className="OWOption OWOption_Widest OWHeight-56 OWAppear_3"
            onClick={produceHandler(FrameSizeEnum.Large)}
          >
            <div className="OWOption-Row OWOption-Row_SpaceBetween OWPadding-0-17">
              <span className="OWOption-Desc OWOption-Desc_Regular">Large</span>
              <span className="OWOption-Desc OWOption-Desc_Bold">54-58 mm</span>
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
