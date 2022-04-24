import { useContext } from 'react';
import { SurveyContext } from 'context/survey';
import { useSwitcher } from 'services/screens';
import { CheckboxCard } from 'components/CheckboxCard';
import frameStylesData from 'data/frameStyles';

export function FrameStyle() {
  const { shape, setShape } = useContext(SurveyContext);
  const switcher = useSwitcher();

  return (
    <section className="OWMain">
      <div className="OWMain-Container OWPadding-0">
        <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-30 OWMarginBottom-10">
          Which frame style are you looking for?
        </h2>
        <p className="OWMain-Tip OWMarginBottom-10 OWAppear_1">
          You can pick more than one.
        </p>
        <div className="OWMain-WideElement OWAppear_2 OWMarginBottom-10">
          <div className="OWOptions OWOptions_Clear OWOptions_4-cols OWOptions_gap-14">
            {frameStylesData.map(frameStyle => {
              return (
                <CheckboxCard
                  key={frameStyle.id}
                  data={shape}
                  setData={setShape}
                  {...frameStyle}
                />
              );
            })}
          </div>
        </div>
        <button
          className="OWMain-Button OWMain-Button_AltFont OWMarginBottom-25 OWAppear_3"
          disabled={shape.length === 0}
          onClick={() => switcher(1)}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
