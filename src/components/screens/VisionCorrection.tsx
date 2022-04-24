import { useContext } from 'react';
import { useSwitcher } from 'services/screens';
import { LensType } from 'context/types';
import { SurveyContext } from 'context/survey';
import { LensTypeEnum } from 'context/options';

export function VisionCorrection() {
  const switcher = useSwitcher();
  const { setLensType } = useContext(SurveyContext);

  const produceHandler = (option: LensType) => {
    return () => {
      switcher(1);
      setLensType(option);
    };
  };

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-25 OWMarginBottom-30">
          What do you need your glasses for?
        </h2>
        <div className="OWOptions OWMarginBottom-30 OWOptions_gap-14">
          <button
            className="OWOption OWOption_Wider OWHeight-84 OWAppear_1"
            onClick={produceHandler(LensTypeEnum.NearVision)}
          >
            <span className="OWOption-Desc">Near Vision</span>
          </button>
          <button
            className="OWOption OWOption_Wider OWHeight-84 OWAppear_2"
            onClick={produceHandler(LensTypeEnum.DistanceVision)}
          >
            <span className="OWOption-Desc">Distance Vision</span>
          </button>
          <button
            className="OWOption OWOption_Wider OWHeight-84 OWAppear_3"
            onClick={produceHandler(LensTypeEnum.MultifocalOrProgressive)}
          >
            <span className="OWOption-Desc">Multifocal / Progressive</span>
          </button>
        </div>
        <button
          className="OWMain-AltOption OWAppear_3"
          onClick={produceHandler(null)}
        >
          Skip
        </button>
      </div>
    </section>
  );
}
