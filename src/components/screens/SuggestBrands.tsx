import { useSwitcher } from 'services/screens';

export function SuggestBrands() {
  const switcher = useSwitcher();

  return (
    <section className="OWMain">
      <div className="OWMain-Container">
        <h2 className="OWMain-Title-2 OWWidth-254 OWAppear_0 OWMarginTop-25 OWMarginBottom-30">
          Are you looking for any particular eyewear brands?
        </h2>
        <div className="OWOptions OWOptions_gap-16">
          <button
            className="OWOption OWHeight-117 OWAppear_1"
            onClick={() => switcher(1)}
          >
            <span className="OWOption-Desc">Yes, I have some in mind</span>
          </button>
          <button
            className="OWOption OWHeight-117 OWAppear_2"
            onClick={() => switcher(2)}
          >
            <span className="OWOption-Desc">No, brand isn't important</span>
          </button>
        </div>
      </div>
    </section>
  );
}
