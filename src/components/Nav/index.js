
import React from "react";


function Nav({currentOption, navOptionChange}) {


  return (
    <>
    <header className="flex-row px-1">
      <h2>
        <a
          data-testid="link"
          href="/"
          onClick={() => navOptionChange("/")}
          className={currentOption === "/" ? "currentOption" : ""}
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
              onClick={() => navOptionChange("/")}
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
              onClick={() => navOptionChange("Resume")}
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
              onClick={() => navOptionChange("Portfolio")}
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
              onClick={() => navOptionChange("Contact")}
              className={currentOption === "Contact" ? "currentOption" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
       <div class="hero">
      <div class="hero-section"></div>
    </div>
    </>
  );
  
}

export default Nav;
