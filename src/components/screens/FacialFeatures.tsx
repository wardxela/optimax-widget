import { FacialFeaturesEnum } from 'context/options';
import { SurveyContext } from 'context/survey';
import { FacialFeatures as FacialFeaturesType } from 'context/types';
import { useContext } from 'react';
import { useSwitcher } from 'services/screens';

export function FacialFeatures() {
  const switcher = useSwitcher();
  const { setFacialFeatures } = useContext(SurveyContext);

  const produceHandler = (option: FacialFeaturesType) => {
    return () => {
      switcher(1);
      setFacialFeatures(option);
    };
  };

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWWidth-243 OWMarginTop-25 OWMarginBottom-30">
          How would you define your facial features?
        </h2>
        <div className="OWOptions OWMarginBottom-30 OWOptions_gap-14">
          <button
            className="OWOption OWOption_Widest OWHeight-97 OWAppear_1"
            onClick={produceHandler(FacialFeaturesEnum.Sharp)}
          >
            <span className="OWOption-Desc">Sharp</span>
          </button>
          <button
            className="OWOption OWOption_Widest OWHeight-97 OWAppear_2"
            onClick={produceHandler(FacialFeaturesEnum.Rounded)}
          >
            <span className="OWOption-Desc">Rounded</span>
          </button>
          <button
            className="OWOption OWOption_Widest OWHeight-97 OWAppear_3"
            onClick={produceHandler(FacialFeaturesEnum.Between)}
          >
            <span className="OWOption-Desc">In between</span>
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
