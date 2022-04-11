import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Resume from '../Resume';


function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'About Me':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
