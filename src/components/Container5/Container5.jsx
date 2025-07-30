import { Figure } from "../Container3/Figure";
import "./style.css";

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
    <section className="container-5">
      <h2 className="title">
        Course Offered by CADTABS (Autodesk Learning Partner)
      </h2>

      <div className="image-container" id="container-5">
        {figures.map((figure) => (
          <Figure href={figure.href} src={figure.src} text={figure.text} />
        ))}
      </div>
    </section>
  );
};
