import "./style.css";

const ProjectItem = ({ href, text }) => {
  return (
    <>
      <li className="item">
        <a
          className="item-link"
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

const Container8 = () => {
  return (
    <section className="container-8">
      <h3 className="title">students projects</h3>
      <ul className="project" id="container-8">
        {items.map((item) => (
          <ProjectItem href={item.href} text={item.text} />
        ))}
      </ul>
    </section>
  );
};

export default Container8;
