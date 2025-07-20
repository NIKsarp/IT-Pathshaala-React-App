const Figure = ({ href, src, text }) => {
  return (
    <>
      <figure className="figure">
        <a className="anchor" href={`https://${href}/`}>
          <img
            className="figure-img"
            src={`images/${src}`}
            alt={text}
            title={text}
          />
          <figcaption className="figure-caption">{text}</figcaption>
        </a>
      </figure>
    </>
  );
};

export default Figure;
