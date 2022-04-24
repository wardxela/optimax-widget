import { useSwitcher } from 'services/screens';
import _imgGreeting from 'assets/img/greeting.png';

export function Greeting() {
  const switcher = useSwitcher();

  return (
    <section className="OWMain OWMain_Gradient">
      <div className="OWMain-Container">
        <img
          src={_imgGreeting}
          alt="Greeting!"
          className="OWMain-Image OWAppear_0 OWMarginTop-40 OWMarginBottom-45"
          draggable="false"
        />
        <h2 className="OWMain-Title OWMarginBottom-20 OWAppear_0">
          Let’s find your perfect pair!
        </h2>
        <p className="OWMain-Description OWMarginBottom-30 OWAppear_1">
          Take the quiz to easily discover your perfect fit from thousands of
          styles
        </p>
        <button
          className="OWMain-Button OWAppear_2"
          onClick={() => switcher(1)}
        >
          Start Now
        </button>
      </div>
    </section>
  );
}
