import React from "react";
import Nav from "./components/Nav";
import Project from "./components/Project"
import About from "./components/About";
import Resume from "./components/Resume"
import Contact from "./components/Contact"



function App() {

  return (
    
    <div>
      <Nav></Nav>
    
      <main>
      <About></About>
      {/* <Project></Project>
      <Resume></Resume>
      <Contact></Contact> */}
      </main>
    </div>
  );
}

export default App;
