import React, { useState } from "react";
import Navigation from "./Nav";
import Projects from "./Projects";
import About from "./About";
import Resume from "./Resume/";
import Contact from "./Contact";


function Container() {
  const [currentOption, setOption] = useState("About Me");

  const render = () => {
    if (currentOption === "About Me") {
      return <About />;
    }
    if (currentOption === "Resume") {
      return <Resume />;
    }
    if (currentOption === "Projects") {
      return <Projects />;
    }
    if (currentOption === "Contact") {return <Contact />;}
  };

  const navOptionChange = (option) => setOption(option);

  return (
    <>
      <div>
        <Navigation
          currentOption={currentOption}
          navOptionChange={navOptionChange}
        />

        <div class="hero">
          <div class="hero-section"></div>
        </div>
        {render()}
      </div>

      <section id="my-contact" class="contact">
        <div class="contact-info">
          <h3>Contact Information</h3>
          <p>Have any questions? Contact me.</p>
          <br />
          Phone: <a href="tel:432-557-2582">432-557-2582</a> <br />
          Email:
          <a href="mailto:michvalenz27@gmail.com" target="blank">
            michvalenz27@gmail.com
          </a>
          <br />
          Social Media:
          <a
            href="https://www.linkedin.com/in/michelle-valenzuela-4aa119190/"
            target="blank"
          >
            Linkedin
          </a>
          <a href="https://github.com/MichValenz" target="blank">
            Git Hub
          </a>
        </div>
      </section>
      <footer>Website created by: Michelle Valenzuela</footer>
    </>
  );


}

export default Container;
