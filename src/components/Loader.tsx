import _imgLike from 'assets/img/icons/like.png';

interface LoaderProps {
  text: string;
}

export function Loader({ text }: LoaderProps) {
  return (
    <section className="OWMain">
      <div className="OWMain-Container OWPadding-0">
        <div className="OWIcon OWMarginTop-100 OWMarginBottom-40 OWAppear_0">
          <img
            src={_imgLike}
            alt="Cool!"
            className="OWIcon-Image"
            draggable="false"
          />
        </div>
        <h2 className="OWMain-Title OWMain-Title_alt OWAppear_2">{text}</h2>
      </div>
    </section>
  );
}
