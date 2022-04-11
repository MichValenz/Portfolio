import React, { useEffect } from 'react';


function Navigation(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = (currentPage.name);
  }, [currentPage]);

  return (    
      
      <>
      <header>
        <h2>
          <a
            href="/"
            onClick={() => setCurrentPage("/")}
            className={currentPage === "/" ? "currentPage" : ""}
          >
            Michelle Valenzuela
          </a>
        </h2>
      
      <nav>
        <ul  className="flex-row">
          {pages.map((Page) => (
            <li
              className={`navLinks ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {Page.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
        </header>
      </>
  );
}



export default Navigation;
