export function FrameStyle() {
  return (
    <section className="OWMain">
      <div className="OWMain-Container OWPadding-0">
        <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-30 OWMarginBottom-10">
          Which frame style are you looking for?
        </h2>
        <p className="OWMain-Tip OWMarginBottom-20 OWAppear_1">
          You can pick more than one.
        </p>
        <div className="OWMain-WideElement">
          <div className="OWOptions OWOptions_3-cols OWOptions_gap-14">
            <label>
              <input type="checkbox" />
            </label>
            <label>
              <input type="checkbox" />
            </label>
            <label>
              <input type="checkbox" />
            </label>
          </div>
        </div>
        <button className="OWMain-Button OWAppear_2">Continue</button>
      </div>
    </section>
  );
}
