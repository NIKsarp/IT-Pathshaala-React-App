export const Figure = ({ href, src, text }) => {
  return (
    <>
      <figure className="figure relative group">
        <a className="anchor" href={`https://${href}/`}>
          <img
            className="figure-img rounded-2xl w-[clamp(18rem,10vw,20rem)] min-h-56 transition-[var(--transition)] relative opacity-80 group-hover:opacity-20 animate-slide"
            src={`images/${src}`}
            alt={text}
            title={text}
          />
          <figcaption className="figure-caption text-[var(--black)] font-bold text-[clamp(1rem,2vw,1.5rem)] opacity-0 transition-all duration-200 ease-linear group-hover:opacity-100">
            {text}
          </figcaption>
        </a>
      </figure>
    </>
  );
};
