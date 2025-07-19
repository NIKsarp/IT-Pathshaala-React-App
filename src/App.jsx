import Header from "./components/Header/Header.jsx";
import Container1 from "./components/Container1/Container1.jsx";
import { Container2, Element } from "./components/Container2/Container2.jsx";
import { Footer, currentYear } from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Container1 />
      <Container2 />
      <Footer />
    </>
  );
};

export default App;
