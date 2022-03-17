import React from "react";





//I need to add a link to the homepage (/) and images to header/nav bar
function Nav() {
  return (
    <header>
      <h2>
        <a home="link" href="/">
          Michelle Valenzuela
        </a>
      </h2>
      <nav>
        <ul className="aboutme">
          <li className="aboutmeList">
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {/* {props.map((sample) => (
            <li className="mx-1" key={sample.name}>
              <span onClick={sampleSelected}>{sample.name}</span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
