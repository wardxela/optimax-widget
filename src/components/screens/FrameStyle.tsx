import { useContext, useEffect, useState } from 'react';
import { SurveyContext } from 'context/survey';
import { useSwitcher } from 'services/screens';
import _imgAssurance from 'assets/img/icons/assurance.svg';
import _imgRectangle from 'assets/img/frame-style/Rectangle.png';
import _imgBrowline from 'assets/img/frame-style/Browline.png';
import _imgAviator from 'assets/img/frame-style/Aviator.png';
import _imgGeometric from 'assets/img/frame-style/Geometric.png';
import _imgWayframe from 'assets/img/frame-style/Wayframe.png';
import _imgRound from 'assets/img/frame-style/Round.png';
import _imgOval from 'assets/img/frame-style/Oval.png';
import _imgOversized from 'assets/img/frame-style/Oversized.png';
import _imgCatEye from 'assets/img/frame-style/Cat Eye.png';
import _imgRimless from 'assets/img/frame-style/Rimless.png';
import _imgSquare from 'assets/img/frame-style/Square.png';
import _imgWrap from 'assets/img/frame-style/Wrap.png';

interface CheckboxCardProps {
  id: string;
  title: string;
  image: string;
}

const frameStylesData = [
  {
    id: 'rectangle',
    title: 'Rectangle',
    image: _imgRectangle,
  },
  {
    id: 'browline',
    title: 'Browline',
    image: _imgBrowline,
  },
  {
    id: 'aviator',
    title: 'Aviator',
    image: _imgAviator,
  },
  {
    id: 'geometric',
    title: 'Geometric',
    image: _imgGeometric,
  },
  {
    id: 'wayframe',
    title: 'Wayframe',
    image: _imgWayframe,
  },
  {
    id: 'round',
    title: 'Round',
    image: _imgRound,
  },
  {
    id: 'oval',
    title: 'Oval',
    image: _imgOval,
  },
  {
    id: 'oversized',
    title: 'Oversized',
    image: _imgOversized,
  },
  {
    id: 'cat_eye',
    title: 'Cat Eye',
    image: _imgCatEye,
  },
  {
    id: 'rimless',
    title: 'Rimless',
    image: _imgRimless,
  },
  {
    id: 'square',
    title: 'Square',
    image: _imgSquare,
  },
  {
    id: 'wrap',
    title: 'Wrap',
    image: _imgWrap,
  },
];

function CheckboxCard({ id, title, image }: CheckboxCardProps) {
  const { shape, setShape } = useContext(SurveyContext);

  const alreadyExist = shape.indexOf(id) !== -1;

  const [checked, setChecked] = useState(alreadyExist);

  useEffect(() => {
    if (checked && !alreadyExist) {
      setShape(prevShape => [...prevShape, id]);
    } else if (!checked && alreadyExist) {
      setShape(prevShape =>
        prevShape.filter(currentShape => currentShape !== id)
      );
    }
  }, [id, checked, alreadyExist, setShape]);

  return (
    <div className="OWCheckbox">
      <input
        className="OWCheckbox-Itself"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => setChecked(prevChecked => !prevChecked)}
      />
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
  const { shape } = useContext(SurveyContext);
  const switcher = useSwitcher();

  return (
    <section className="OWMain">
      <div className="OWMain-Container OWPadding-0">
        <h2 className="OWMain-Title-2 OWAppear_0 OWMarginTop-30 OWMarginBottom-10">
          Which frame style are you looking for?
        </h2>
        <p className="OWMain-Tip OWAppear_1">You can pick more than one.</p>
        <div className="OWMain-WideElement OWMarginBottom-10">
          <div className="OWOptions OWOptions_Clear OWOptions_4-cols OWOptions_gap-14">
            {frameStylesData.map(frameStyle => {
              return (
                <CheckboxCard
                  key={frameStyle.id}
                  id={frameStyle.id}
                  title={frameStyle.title}
                  image={frameStyle.image}
                />
              );
            })}
          </div>
        </div>
        <button
          className="OWMain-Button OWMain-Button_AltFont OWAppear_2"
          disabled={shape.length === 0}
          onClick={() => switcher(1)}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
