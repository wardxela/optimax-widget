import { useDestinationUrl } from 'hooks/useDestinationUrl';
import _imgGift from 'assets/img/icons/gift.png';

export function FinalScreen() {
  const url = useDestinationUrl();

  return (
    <section className="OWMain OWMain_Gradient">
      <div className="OWMain-Container">
        <div className="OWIcon OWMarginTop-40 OWMarginBottom-30 OWAppear_0">
          <img
            src={_imgGift}
            alt="Gift"
            className="OWIcon-Image OWIcon-Image_Gift"
            draggable="false"
          />
        </div>
        <h2 className="OWMain-Title-3 OWMarginBottom-10 OWWidth-318 OWAppear_1">
          We've found some awesome frames for you!
        </h2>
        <p className="OWMain-Description OWMain-Description_Alt OWMarginBottom-50 OWAppear_2">
          Send the results to your email to receive special discounts.
        </p>
        <button
          className="OWMain-Button OWMarginBottom-30 OWAppear_3"
          onClick={() => console.log(`URL: ${url}`)}
        >
          Send
        </button>
        <p className="OWMain-Agreement OWWidth-286 OWMarginTop-Auto OWAppear_4">
          By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and
          receiving promotion emails
        </p>
      </div>
    </section>
  );
}
