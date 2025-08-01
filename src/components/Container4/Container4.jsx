export const Container4 = () => {
  return (
    <section className="container-4  flex p-4 m-4 justify-evenly flex-wrap gap-[var(--gap)]">
      <div className="left-box max-w-[480px]">
        <h2 className="title text-[clamp(1rem,10vw,3rem)] font-bold">
          GLOBAL CERTIFICATE
        </h2>
        <p className="text my-4 text-[clamp(1rem,5vw,2rem)] text-[var(--secondary-text)]">
          IT Pathshaala is the{" "}
          <strong>Best Training Institute in Bareilly</strong> for
          <strong> Java, Python, Data Science, </strong> AI, IoT, PHP, MySQL,
          Web, Android, Development Course. Learn Graphic Design, Digital
          Marketing Course in Bareilly.
        </p>
      </div>

      <div className="right-box max-w-[480px]">
        <iframe
          className="video max-w-64"
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
