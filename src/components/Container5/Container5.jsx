import { Figure } from "../Container3/Figure";

export const figures = [
  {
    href: "cadtabs.com/product-category/cadd-course",
    src: "image-container-2/pexels-grovebrands-15764116.jpg",
    text: "CADD Course",
  },
  {
    href: "cadtabs.com/product-category/quantity-surverying",
    src: "image-container-2/pexels-fauxels-3183153.jpg",
    text: "Quantity Surveying",
  },
  {
    href: "cadtabs.com/product-category/interior-design",
    src: "image-container-2/home-decoration-property-living-room-room-apartment-945407-pxhere.com.jpg",
    text: "Interior Design",
  },
  {
    href: "cadtabs.com/product-category/import-export",
    src: "image-container-2/sea-4106040_1280.jpg",
    text: "Import Export",
  },
];

export const Container5 = () => {
  return (
    <section className="container-5 flex gap-[var(--gap)] text-center flex-col">
      <h2 className="title text-[clamp(1rem,5vw,2rem)]">
        Course Offered by CADTABS (Autodesk Learning Partner)
      </h2>

      <div
        className="image-container flex gap-4 justify-center flex-wrap text-center"
        id="container-5"
      >
        {figures.map((figure, index) => (
          <Figure
            key={index}
            href={figure.href}
            src={figure.src}
            text={figure.text}
          />
        ))}
      </div>
    </section>
  );
};
