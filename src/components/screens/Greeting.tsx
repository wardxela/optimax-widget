import { MouseEvent } from 'react';
import _imgGreeting from '../../assets/img/greeting.png';
import { useScreenSwitcher } from '../../screens';

export function Greeting() {
  const switchScreen = useScreenSwitcher();

  const goNext = (event: MouseEvent<HTMLButtonElement>) => {
    switchScreen('gender', 1);
  };

  return (
    <section className="OWMain OWMain_Gradient">
      <div className="OWMain-Container OWMain-Container_Common">
        <img
          src={_imgGreeting}
          alt="Greeting!"
          className="OWMain-Image OWHelper-appear_0"
        />
        <h2 className="OWMain-Title OWHelper-appear_0">
          Let’s find your perfect pair!
        </h2>
        <p className="OWMain-Description OWHelper-appear_1">
          Take the quiz to easily discover your perfect fit from thousands of
          styles
        </p>
        <button className="OWMain-Button OWHelper-appear_2" onClick={goNext}>
          Start Now
        </button>
      </div>
    </section>
  );
}
