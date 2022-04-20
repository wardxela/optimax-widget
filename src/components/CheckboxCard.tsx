import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import _imgAssurance from 'assets/img/icons/assurance.svg';

interface CheckboxCardProps<T = string[]> {
  id: string;
  title?: string;
  image: string;
  data: T;
  setData: Dispatch<SetStateAction<T>>;
}

export function CheckboxCard({
  id,
  title,
  image,
  data,
  setData,
}: CheckboxCardProps) {
  const alreadyExist = data.indexOf(id) !== -1;

  const [checked, setChecked] = useState(alreadyExist);

  const hasTitle = title !== undefined;

  useEffect(() => {
    if (checked && !alreadyExist) {
      setData(prevData => [...prevData, id]);
    } else if (!checked && alreadyExist) {
      setData(prevData => prevData.filter(currentShape => currentShape !== id));
    }
  }, [id, checked, alreadyExist, setData]);

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
        className={`OWOption OWCheckbox-Label OWHeight-103${
          hasTitle ? ' OWPadding-0-15-13' : ''
        }`}
        htmlFor={id}
      >
        <div className="OWOption-Column">
          <img
            src={image}
            className={`OWCheckbox-Image${
              hasTitle ? ' OWMarginBottom-10' : ''
            }`}
            alt={hasTitle ? title : id}
          />
          {hasTitle && <span className="OWCheckbox-Title">{title}</span>}
        </div>
      </label>
      <div className="OWCheckbox-Assurance">
        <img src={_imgAssurance} alt="Assurance" />
      </div>
    </div>
  );
}
