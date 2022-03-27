

import "bootstrap/dist/css/bootstrap.min.css"

import React, { useState } from "react";
import Navigation from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";
import Resume from "./components/Resume/";
import Contact from "./components/Contact";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";
import { IconContext } from "react-icons";

function App() {
  const [currentOption, setOption] = useState("/");
  const render = () => {
    if (currentOption === "About Me") {
      return <About />;
    }
    if (currentOption === "/") {
      return <About />;
    }
    if (currentOption === "Resume") {
      return <Resume />;
    }
    if (currentOption === "Projects") {
      return <Projects />;
    }
    if (currentOption === "Contact") {
      return <Contact />;
    }
  };

  const navOptionChange = (option) => setOption(option);

  return (
    <>
      <div>
        <Navigation
          currentOption={currentOption}
          navOptionChange={navOptionChange}
        />

        <div className="hero">
          <div className="hero-section"></div>
        </div>
        <div className="box">{render()}</div>
      </div>

      <section id="my-contact" className="contact">
        <div className="contact-info">
          <IconContext.Provider value={{ size: "3em", color: "#2e374d" }}>
            <h3>Contact Information</h3>
            <p>Have any questions? Contact me.</p>
            <a href="tel:432-557-2582">
              <AiFillPhone />
            </a>
            <a href="mailto:michvalenz27@gmail.com" alt="email" target="blank">
              <AiFillMail />
            </a>
            <a
              href="https://www.linkedin.com/in/michelle-valenzuela-4aa119190/"
              alt="linkedin"
              target="blank"
            >
              <AiFillLinkedin />
            </a>{" "}
            <a href="https://github.com/MichValenz" alt="github" target="blank">
              <GoMarkGithub />
            </a>{" "}
          </IconContext.Provider>
        </div>
      </section>

      <footer>Website created by: Michelle Valenzuela</footer>
    </>
  );
}

export default App;

