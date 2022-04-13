import _imgLike from '../../assets/img/like.png';

interface LoaderProps {
  text: string;
}

export function Loader({ text }: LoaderProps) {
  return (
    <section className="OWMain OWMain_Common">
      <div className="OWMain-Container">
        <div className="OWLikeIcon OWHelper-mt-100 OWHelper-mb-40 OWHelper-appear_0">
          <img src={_imgLike} alt="Cool!" className="OWLikeIcon-Image" />
        </div>
        <h2 className="OWMain-Title OWMain-Title_alt OWHelper-appear_2">
          {text}
        </h2>
      </div>
    </section>
  );
}
