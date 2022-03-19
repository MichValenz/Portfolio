import React from "react";


function Nav({currentOption, changeOption}) {
  
  return (
    <header className="flex-row px-1">
      <h2>
        <a
          data-testid="link"
          href="/"
          onClick={() => changeOption("Michelle Valenzuela")}
          className={
            currentOption === "Michelle Valenzuela"
              ? "main-nav-active"
              : "navActive"
          }
        >
          Michelle Valenzuela
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="link"
              href="/"
              onClick={() => changeOption("Home")}
              className={
                currentOption === "Home" ? "main-nav-active" : "navActive"
              }
            >
              Home
            </a>
          </li>
          <li className="mx-2">
            <a
              data-testid="link"
              href="#resume"
              onClick={() => changeOption("Resume")}
              className={
                currentOption === "Resume" ? "main-nav-active" : "navActive"
              }
            >
              Resume
            </a>
          </li>
          <li className="mx-2">
            <a
              data-testid="link"
              href="#Portfolio"
              onClick={() => changeOption("Portfolio")}
              className={
                currentOption === "Portfolio" ? "main-nav-active" : "navActive"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a
              data-testid="link"
              href="#contact"
              onClick={() => changeOption("Contact")}
              className={
                currentOption === "Contact" ? "main-nav-active" : "navActive"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
