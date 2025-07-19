import "./style.css";

const Container5 = () => {
  return (
    <section className="container-5">
      <h2 className="title">
        Course Offered by CADTABS (Autodesk Learning Partner)
      </h2>

      <div className="image-container" id="container-5">
        <figure className="figure">
          <a className="anchor" href="https://cadtabs.com/product-category/cadd-course/">
            <img className="figure-img" src="src/image-container-2/pexels-grovebrands-15764116.jpg" alt="CADD Course" title="CADD Course" />
            <figcaption className="figure-caption">CADD Course</figcaption>
          </a>
        </figure>

        <figure className="figure">
          <a className="anchor" href="https://cadtabs.com/product-category/quantity-surverying/">
            <img className="figure-img" src="src/image-container-2/pexels-fauxels-3183153.jpg" alt="Quantity Surveying" title="Quantity Surveying" />
            <figcaption className="figure-caption">Quantity Surveying</figcaption>
          </a>
        </figure>

        <figure className="figure">
          <a className="anchor" href="https://cadtabs.com/product-category/interior-design/">
            <img className="figure-img" src="src/image-container-2/home-decoration-property-living-room-room-apartment-945407-pxhere.com.jpg" alt="Interior Design" title="Interior Design" />
            <figcaption className="figure-caption">Interior Design</figcaption>
          </a>
        </figure>

        <figure className="figure">
          <a className="anchor" href="https://cadtabs.com/product-category/import-export/">
            <img className="figure-img" src="src/image-container-2/sea-4106040_1280.jpg" alt="Import Export" title="Import Export" />
            <figcaption className="figure-caption">Import Export</figcaption>
          </a>
        </figure>
      </div>
    </section>
  );
};

export default Container5;
