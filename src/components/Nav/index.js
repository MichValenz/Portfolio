import React from "react";


const navOptions = [
    {
        name: "Portfolio",
        description: "Applications completed by Michelle Valenzuela"
    },
    {
        name: "Resume",
        description: "Michelle's work and education history."
    }
];

function optionSelected(name) {
  console.log(`${name} clicked`);
}



//I need to add a link to the homepage (/) and images to header/nav bar
function Nav() {
  return (
    <header>
      <h2>

      </h2>
      <nav>
        <ul className="aboutme">
          <li className="aboutmeList">
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {navOptions.map((navOption) => (
            <li className="mx-1" key={navOption.name}>
              <span onClick={optionSelected}>{navOption.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
