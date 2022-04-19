import _imgAssurance from 'assets/img/assurance.svg';
import _imgRectangle from 'assets/img/Rectangle.png';

interface CheckboxCardProps {
  id: string;
  title: string;
  image: string;
}

function CheckboxCard({ id, title, image }: CheckboxCardProps) {
  return (
    <div className="OWCheckbox">
      <input className="OWCheckbox-Itself" type="checkbox" id={id} />
      <label
        className="OWOption OWCheckbox-Label OWPadding-0-15-13 OWHeight-103"
        htmlFor={id}
      >
        <div className="OWOption-Column">
          <img
            src={image}
            className="OWCheckbox-Image OWMarginBottom-10"
            alt={title}
          />
          <span className="OWCheckbox-Title">{title}</span>
        </div>
      </label>
      <div className="OWCheckbox-Assurance">
        <img src={_imgAssurance} alt={title} />
      </div>
    </div>
  );
}

export function FrameStyle() {
  return (
    <section className="OWMain">
      <div className="OWMain-Container OWPadding-0">
        <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-30 OWMarginBottom-10">
          Which frame style are you looking for?
        </h2>
        <p className="OWMain-Tip OWAppear_1">You can pick more than one.</p>
        <div className="OWMain-WideElement OWMarginBottom-10">
          <div className="OWOptions OWOptions_Clear OWOptions_4-cols OWOptions_gap-14">
            <CheckboxCard
              id="rectangle"
              title="Rectangle"
              image={_imgRectangle}
            />
            <CheckboxCard
              id="rectangle-2"
              title="Rectangle"
              image={_imgRectangle}
            />
            <CheckboxCard
              id="rectangle-3"
              title="Rectangle"
              image={_imgRectangle}
            />
            <CheckboxCard
              id="rectangle-4"
              title="Rectangle"
              image={_imgRectangle}
            />
            <CheckboxCard
              id="rectangle-5"
              title="Rectangle"
              image={_imgRectangle}
            />
            <CheckboxCard
              id="rectangle-6"
              title="Rectangle"
              image={_imgRectangle}
            />
            <CheckboxCard
              id="rectangle-7"
              title="Rectangle"
              image={_imgRectangle}
            />
            <CheckboxCard
              id="rectangle-8"
              title="Rectangle"
              image={_imgRectangle}
            />
            <CheckboxCard
              id="rectangle-9"
              title="Rectangle"
              image={_imgRectangle}
            />
            <CheckboxCard
              id="rectangle-10"
              title="Rectangle"
              image={_imgRectangle}
            />
            <CheckboxCard
              id="rectangle-11"
              title="Rectangle"
              image={_imgRectangle}
            />
            <CheckboxCard
              id="rectangle-12"
              title="Rectangle"
              image={_imgRectangle}
            />
          </div>
        </div>
        <button className="OWMain-Button OWAppear_2">Continue</button>
      </div>
    </section>
  );
}
