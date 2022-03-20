import React, { useState } from "react";
import Nav from "./Nav";
// import Projects from "./components/Projects";
import About from "./About";
// import Resume from "./components/Resume";
import Contact from "./Contact";

function Container() {
  const [currentOption, setOption] = useState("Home");

  const render = () => {
    if (currentOption === "Home") {
      return <About />;
    }
    // if (currentOption === "Resume") {
    //   return <Resume />;
    // }
    // if (currentOption === "Projects") {
    //   return <Projects />;
    // }
    return <Contact />;
  };

  const navOptionChange = (option) => setOption(option);

  return (
    <div>
      <Nav currentOption={currentOption} navOptionChange={navOptionChange} />
      {render()}
    </div>
  );
}

export default Container;
