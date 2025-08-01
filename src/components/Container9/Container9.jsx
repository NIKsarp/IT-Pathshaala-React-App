import "./style.css";

export const GalleryImage = ({ src }) => {
  return (
    <figure className="figure bg-[#444444] w-[clamp(10rem,5vw,20rem)] min-h-40">
      <img
        className="figure-img bg-[#444444] w-[clamp(10rem,5vw,20rem)] min-h-40 "
        src={`https://itpathshaala.in/wp-content/uploads/2023/02/${src}`}
        alt="it pathshaala students"
        title="it pathshaala students"
      />
    </figure>
  );
};

const images = [
  { src: "03ab57ae-2835-4e42-96e7-7cb5285e15ff-300x225.jpg" },
  { src: "17b73dab-f013-4619-8024-2c9722a12ae9-300x225.jpg" },
  { src: "929f263a-f9f3-45ff-9835-b82cf143f5b8-300x225.jpg" },
  { src: "b3acece4-95d9-44aa-aef7-61cc9e1ff59c-300x225.jpg" },
  { src: "c0ee9306-16c3-415d-9a2c-6ddaaeeeeda5-300x225.jpg" },
  { src: "c3b63e6f-b793-4f80-b20f-d306eb409e39-300x225.jpg" },
  { src: "c669700e-72f7-44bf-b834-4fe1ca1607e8-300x225.jpg" },
];

export const Container9 = () => {
  return (
    <section className="container-9 flex p-[var(--gap)] gap-[var(--gap)] flex-col capitalize text-center">
      <h2 className="title text-[clamp(1.2rem,10vw,3rem)]">gallery</h2>
      <div
        className="content flex gap-[var(--gap)] flex-wrap items-center justify-center"
        id="contaiener-9"
      >
        {images.map((image) => (
          <GalleryImage src={image.src} />
        ))}
      </div>
    </section>
  );
};
