
import React from "react";
import Nav from 'react-bootstrap/Nav'

function Navigation({currentOption, navOptionChange}) {


  return (
    <>
      <header>
        <h2>
          <a
            
            href="/"
            onClick={() => navOptionChange("/")}
            className={currentOption === "/" ? "currentOption" : ""}
          >
            Michelle Valenzuela
          </a>
        </h2>
        <Nav variant="pills" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              href="/#Home"
              onClick={() => navOptionChange("Home")}
              className={currentOption === "Home" ? "currentOption" : ""}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              href="/#Resume"
              onClick={() => navOptionChange("Resume")}
              className={currentOption === "Resume" ? "currentOption" : ""}
            >
              Resume
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
            eventKey="link-3" 
            href="/#Projects"
            onClick={() => navOptionChange("Projects")}
            className={currentOption === "Projects" ? "currentOption" : ""}
              >Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-4"
              href="/#Contact"
              onClick={() => navOptionChange("Contact")}
              className={currentOption === "Contact" ? "currentOption" : ""}
            >
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
    </>
    // <>
    // <header className="flex-row px-1">
    //   <h2>
    //     <a
    //       data-testid="link"
    //       href="/"
    //       onClick={() => navOptionChange("/")}
    //       className={currentOption === "/" ? "currentOption" : ""}
    //     >
    //       Michelle Valenzuela
    //     </a>
    //   </h2>

    //   <nav>
    //     <ul className="flex-row">
    //       <li className="mx-2">
    //         <a
    //           data-testid="link"
    //           href="/"
    //           onClick={() => navOptionChange("/")}
    //           className={
    //             currentOption === "Home" ? "main-nav-active" : "navActive"
    //           }
    //         >
    //           Home
    //         </a>
    //       </li>
    //       <li className="mx-2">
    //         <a
    //           data-testid="link"
    //           href="#resume"
    //           onClick={() => navOptionChange("Resume")}
    //           className={
    //             currentOption === "Resume" ? "main-nav-active" : "navActive"
    //           }
    //         >
    //           Resume
    //         </a>
    //       </li>
    //       <li className="mx-2">
    //         <a
    //           data-testid="link"
    //           href="#Portfolio"
    //           onClick={() => navOptionChange("Portfolio")}
    //           className={
    //             currentOption === "Portfolio" ? "main-nav-active" : "navActive"
    //           }
    //         >
    //           Portfolio
    //         </a>
    //       </li>
    //       <li className="mx-2">
    //         <a
    //           data-testid="link"
    //           href="#contact"
    //           onClick={() => navOptionChange("Contact")}
    //           className={currentOption === "Contact" ? "currentOption" : ""}
    //         >
    //           Contact
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
    //    <div class="hero">
    //   <div class="hero-section"></div>
    // </div>
    // </>
  );
  
}

export default Navigation;
