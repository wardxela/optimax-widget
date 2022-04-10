import { useNextScreen } from '../../screens/hooks';
import _imgMan from '../../assets/img/man.png';
import _imgWoman from '../../assets/img/woman.png';

export function Gender() {
  const next = useNextScreen();

  const goNext = () => {
    next();
  };

  return (
    <section className="OWMain OWMain_Common">
      <div className="OWMain-Container OWMain-Container_Common">
        <h2 className="OWMain-Title-2 OWHelper-appear_0 OWHelper-mt-26 OWHelper-mb-32">
          You are looking for
        </h2>
        <div className="OWMain-Options OWMain-Options_gap14">
          <button
            className="OWOption OWOption_middle OWHelper-p-30 OWHelper-appear_1"
            onClick={goNext}
          >
            <div className="OWOption-Column">
              <img
                src={_imgWoman}
                alt="Woman"
                className="OWOption-Image OWHelper-mb-15"
              />
              <span className="OWOption-Desc">Women's Styles</span>
            </div>
          </button>
          <button
            className="OWOption OWOption_middle OWHelper-p-30 OWHelper-appear_2"
            onClick={goNext}
          >
            <div className="OWOption-Column">
              <img
                src={_imgMan}
                alt="Woman"
                className="OWOption-Image OWHelper-mb-15"
              />
              <span className="OWOption-Desc">Men's Styles</span>
            </div>
          </button>
        </div>
        <button
          className="OWMain-SecondButton OWHelper-appear_3"
          onClick={goNext}
        >
          I'd like to see both
        </button>
      </div>
    </section>
  );
}
