import React, { useState } from "react";
import Navigation from "./Nav";
// import Projects from "./components/Projects";
import About from "./About";
import Resume from "./Resume/";
import Contact from "./Contact";
import NavOptions from "./Nav";

function Container() {
  const [currentOption, setOption] = useState("Home");

  const render = () => {
    if (currentOption === "Home") {
      return <About />;
    }
    if (currentOption === "Resume") {
      return <Resume />;
    }
    // if (currentOption === "Projects") {
    //   return <Projects />;
    // }
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
        {render()}
      </div>

      <footer>Website created by: Michelle Valenzuela</footer>
    </>
  );


}

export default Container;
