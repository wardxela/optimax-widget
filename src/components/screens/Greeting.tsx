import _imgGreeting from '../../assets/img/greeting.png';

export function Greeting() {
  return (
    <section className="OWMain OWMain_Gradient">
      <img src={_imgGreeting} alt="Greeting!" className="OWMain-Image" />
      <h2 className="OWMain-Title">Let’s find your perfect pair!</h2>
      <p className="OWMain-Description">
        Take the quiz to easily discover your perfect fit from thousands of
        styles
      </p>
      <button className="OWMain-Button">Start Now</button>
    </section>
  );
}
