const Element = ({ title }) => {
  return (
    <>
      <div className="container-item bg-[var(--theme)] text-[#fffffe] p-[var(--gap)] w-[clamp(16rem,10vw,20rem)] rounded-[var(--gap)]">
        {title}
      </div>
    </>
  );
};

export const Container2 = () => {
  return (
    <>
      <section
        className="container-2 flex flex-wrap gap-[var(--gap)] text-center p-[var(--gap)] justify-center"
        id="container-2"
      >
        <Element title="Autodesk Academic Partner" />
        <Element title="Certiport Testing Centre" />
        <Element title="ISO 9001:2015 Certified" />
      </section>
    </>
  );
};
