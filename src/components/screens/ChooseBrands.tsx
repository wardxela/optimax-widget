import { CheckboxCard } from 'components/CheckboxCard';
import { SurveyContext } from 'context/survey';
import { useContext } from 'react';
import { useSwitcher } from 'services/screens';
import brandsData from 'data/brandsData';

export function ChooseBrands() {
  const { brand, setBrand } = useContext(SurveyContext);

  const switcher = useSwitcher();

  return (
    <section className="OWMain">
      <div className="OWMain-Container OWPadding-0">
        <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-30 OWMarginBottom-10">
          Choose your favorite brands
        </h2>
        <p className="OWMain-Tip OWAppear_1">You can pick more than one.</p>
        <div className="OWMain-WideElement OWMarginBottom-10">
          <div className="OWOptions OWOptions_Clear OWOptions_4-cols OWOptions_gap-14">
            {brandsData.map(curBrand => {
              return (
                <CheckboxCard
                  key={curBrand.id}
                  data={brand}
                  setData={setBrand}
                  {...curBrand}
                />
              );
            })}
          </div>
        </div>
        <button
          className="OWMain-Button OWMain-Button_AltFont OWMarginBottom-25 OWAppear_2"
          disabled={brand.length === 0}
          onClick={() => switcher(1)}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
