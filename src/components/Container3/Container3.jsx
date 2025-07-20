import Figure from "./Figure";
import "./style.css";

const Container3 = () => {
  return (
    <section className="container-3">
      <Figure
        href="itpathshaala.in/product-category/cs-course"
        src="image-container-1/pexels-kevin-ku-92347-577585.jpg"
        text="Computer Science & IT"
      />
      <Figure
        href="itpathshaala.in/product-category/accounts-finance"
        src="image-container-1/pexels-pixabay-53621.jpg"
        text="Accounts & Finance"
      />
      <Figure
        href="itpathshaala.in/product-category/digital-marketing"
        src="image-container-1/digital-marketing-4111002_1280.jpg"
        text="Digital Marketing"
      />
      <Figure
        href="itpathshaala.in/product-category/graphic-web-design"
        src="image-container-1/web-design.jpg"
        text="Graphic / Web Design"
      />
    </section>
  );
};

export default Container3;
