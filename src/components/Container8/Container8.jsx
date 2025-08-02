export const ProjectItem = ({ href, text }) => {
  return (
    <>
      <li className="item transition-[var(--transition)] scale-[0.8] hover:scale-[1]">
        <a
          className="item-link p-4 block font-bold rounded-[var(--gap)] text-[#fffffe] transition-[var(--transition)] shadow-[0_5px_5px_black] bg-[var(--theme)]"
          href={`https://q3schools.com/python-project-${href}/`}
        >
          {text}
        </a>
      </li>
    </>
  );
};

const items = [
  {
    href: "candy-crush",
    text: "Candy Crush",
  },
  {
    href: "calculator",
    text: "Calculator",
  },
  {
    href: "color-game",
    text: "Color Game",
  },
  {
    href: "code-decode",
    text: "Code Decode",
  },
  {
    href: "guess-number",
    text: "Guess No.",
  },
  {
    href: "paint",
    text: "Paint",
  },
  {
    href: "note-pad",
    text: "Note Pad",
  },
];

export const Container8 = () => {
  return (
    <section className="container-8 flex text-center p-[var(--gap)] capitalize flex-col">
      <h3 className="title text-[clamp(1.2rem,10vw,3rem)]">
        students projects
      </h3>
      <ul
        className="project flex my-8 items-center justify-center gap-[var(--gap)] flex-wrap"
        id="container-8"
      >
        {items.map((item, index) => (
          <ProjectItem key={index} href={item.href} text={item.text} />
        ))}
      </ul>
    </section>
  );
};
