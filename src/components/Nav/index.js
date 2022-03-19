import React from "react";





//I need to add a link to the homepage (/) and images to header/nav bar
function Nav() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Michelle Valenzuela
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Me</a>
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
