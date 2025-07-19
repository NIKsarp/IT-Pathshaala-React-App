import logo from "../../assets/IT Pathshaala.png";
import "./style.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <figure className="figure navbar-brand">
          <img
            className="figure-img"
            src={logo}
            // src="/it-pathshaala-digital-marketing-course-in-bareilly.png"
            alt="it pathshaala logo"
          />
        </figure>

        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a href="#" className="dropbtn">
                services
              </a>
              <ul className="dropdown-content">
                <li className="dropdown2">
                  <a href="#" className="dropbtn2">
                    web development
                  </a>
                  <ul className="dropdown-content2">
                    <li>
                      <a href="#">HTML</a>
                    </li>
                    <li>
                      <a href="#">CSS</a>
                    </li>
                    <li>
                      <a href="#">JAVASCRIPT</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">android development</a>
                </li>
                <li>
                  <a href="#">data science</a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="https://itpathshaala.in/blog/">
                blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://itpathshaala.in/about/">
                about us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://itpathshaala.in/contact/">
                contact us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
