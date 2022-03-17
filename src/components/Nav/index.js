import React from "react";




function sampleSelected(name) {
  console.log(`${name} clicked`);
}



//I need to add a link to the homepage (/) and images to header/nav bar
function Nav(props) {
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
          {workSamples.map((sample) => (
            <li className="mx-1" key={sample.name}>
              <span onClick={sampleSelected}>{sample.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
