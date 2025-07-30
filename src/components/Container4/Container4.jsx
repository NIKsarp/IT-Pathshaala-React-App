import "./style.css";

export const Container4 = () => {
  return (
    <section className="container-4">
      <div className="left-box">
        <h2 className="title">GLOBAL CERTIFICATE</h2>
        <p className="text">
          IT Pathshaala is the{" "}
          <strong>Best Training Institute in Bareilly</strong> for
          <strong> Java, Python, Data Science, </strong> AI, IoT, PHP, MySQL,
          Web, Android, Development Course. Learn Graphic Design, Digital
          Marketing Course in Bareilly.
        </p>
      </div>

      <div className="right-box">
        <iframe
          className="video"
          width="992"
          height="558"
          src="https://www.youtube.com/embed/PIAeClln7nw"
          title="coding & programming language course # bareilly"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
