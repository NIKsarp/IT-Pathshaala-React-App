import "./style.css";

export const Element = ({ title }) => {
  return (
    <>
      <div className="container-item">{title}</div>
    </>
  );
};

export const Container2 = () => {
  return (
    <>
      <section className="container-2" id="container-2">
        <Element title="Autodesk Academic Partner" />
        <Element title="Certiport Testing Centre" />
        <Element title="ISO 9001:2015 Certified" />
      </section>
    </>
  );
};

