import { useContext } from 'react';
import { SurveyContext } from 'context/survey';
import { useSwitcher } from 'services/screens';
import { Gender as GenderType } from 'context/types';
import { GenderEnum } from 'context/options';
import _imgMan from 'assets/img/gender/man.png';
import _imgWoman from 'assets/img/gender/woman.png';

export function Gender() {
  const { setGender } = useContext(SurveyContext);

  const switcher = useSwitcher();

  const produceHandler = (option: GenderType) => {
    return () => {
      setGender(option);
      switcher(1);
    };
  };

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWMarginTop-25 OWMarginBottom-30 OWAppear_0">
          You are looking for
        </h2>
        <div className="OWOptions OWOptions_gap-14">
          <button
            className="OWOption OWHeight-138 OWPadding-25 OWAppear_1"
            onClick={produceHandler(GenderEnum.Women)}
          >
            <div className="OWOption-Column">
              <img
                src={_imgWoman}
                alt="Woman"
                className="OWOption-Image OWMarginBottom-15"
              />
              <span className="OWOption-Desc">Women's Styles</span>
            </div>
          </button>
          <button
            className="OWOption OWHeight-138 OWPadding-25 OWAppear_2"
            onClick={produceHandler(GenderEnum.Men)}
          >
            <div className="OWOption-Column">
              <img
                src={_imgMan}
                alt="Woman"
                className="OWOption-Image OWMarginBottom-15"
              />
              <span className="OWOption-Desc">Men's Styles</span>
            </div>
          </button>
        </div>
        <button
          className="OWMain-AltOption OWAppear_3"
          onClick={produceHandler(null)}
        >
          I'd like to see both
        </button>
      </div>
    </section>
  );
}
