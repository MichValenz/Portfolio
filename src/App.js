import React from "react";
import Nav from "./components/Nav";
import Project from "./components/Project"
import About from "./components/About";



function App() {

  return (
    
    <div>
      <Nav></Nav>
      {/* <Work></Work> */}
      <main>
      <About></About>
      </main>
    </div>
  );
}

export default App;
