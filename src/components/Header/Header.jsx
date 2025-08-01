import logo from "../../assets/IT Pathshaala.png";

export const Header = () => {
  return (
    <>
      <header className="header top-0 z-[3] gap-1 flex sticky font-bold items-center py-3 px-6 bg-[#8592b9] shadow-[0_1rem_1rem_#12121220,_inset_0_-1rem_1rem_#fffffe20] justify-between ">
        <figure className="figure navbar-brand">
          <img
            className="figure-img max-w-40 "
            src={logo}
            // src="/it-pathshaala-digital-marketing-course-in-bareilly.png"
            alt="it pathshaala logo"
          />
        </figure>

        <nav className="navbar max-[750px]:hidden">
          <ul className="navbar-nav gap-2 flex">
            <li className="nav-item text-[#121212] cursor-pointer p-3 rounded-xl uppercase transition-all duration-[300ms] ease-in-out hover:text-[var(--white)] hover:shadow-[var(--shadow)] hover:bg-[var(--theme)]">
              <a className="nav-link" href="#">
                home
              </a>
            </li>

            <li className="nav-item dropdown text-[#121212] cursor-pointer p-3 rounded-xl uppercase transition-all duration-[300ms] ease-in-out hover:text-[var(--white)] hover:shadow-[var(--shadow)] hover:bg-[var(--theme)]">
              <a href="#" className="dropbtn">
                services
              </a>
              <ul className="dropdown-content hidden">
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

            <li className="nav-item text-[#121212] cursor-pointer p-3 rounded-xl uppercase transition-all duration-[300ms] ease-in-out hover:text-[var(--white)] hover:shadow-[var(--shadow)] hover:bg-[var(--theme)]">
              <a className="nav-link" href="https://itpathshaala.in/blog/">
                blog
              </a>
            </li>
            <li className="nav-item text-[#121212] cursor-pointer p-3 rounded-xl uppercase transition-all duration-[300ms] ease-in-out hover:text-[var(--white)] hover:shadow-[var(--shadow)] hover:bg-[var(--theme)]">
              <a className="nav-link" href="https://itpathshaala.in/about/">
                about us
              </a>
            </li>
            <li className="nav-item text-[#121212] cursor-pointer p-3 rounded-xl uppercase transition-all duration-[300ms] ease-in-out hover:text-[var(--white)] hover:shadow-[var(--shadow)] hover:bg-[var(--theme)]">
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
