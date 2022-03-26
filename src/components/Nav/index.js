
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
              href="/#About Me"
              onClick={() => navOptionChange("About Me")}
              className={
                currentOption === "About Me" ? "currentOption" : ""
              }
             
            >
              About Me
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
            >
              Projects
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
    
  );
  
}

export default Navigation;
