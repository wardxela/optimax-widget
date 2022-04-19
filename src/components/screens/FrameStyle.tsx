import _imgAssurance from 'assets/img/assurance.svg';

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
          <div className="OWOptions OWOptions_Clear OWOptions_3-cols OWOptions_gap-14">
            <div className="OWCheckbox">
              <input
                className="OWCheckbox-Itself"
                type="checkbox"
                id="first-one"
              />
              <label
                className="OWCheckbox-Label OWOption OWHeight-103"
                htmlFor="first-one"
              ></label>
              <div className="OWCheckbox-Assurance">
                <img src={_imgAssurance} alt="Assurance" />
              </div>
            </div>
            <div className="OWCheckbox">
              <input className="OWCheckbox-Itself" type="checkbox" />
              <label className="OWCheckbox-Label OWOption OWHeight-103"></label>
            </div>
            <div className="OWCheckbox">
              <input className="OWCheckbox-Itself" type="checkbox" />
              <label className="OWCheckbox-Label OWOption OWHeight-103"></label>
            </div>
          </div>
        </div>
        <button className="OWMain-Button OWAppear_2">Continue</button>
      </div>
    </section>
  );
}
