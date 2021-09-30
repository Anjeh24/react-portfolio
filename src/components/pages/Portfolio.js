import React from 'react';



export default function Portfolio() {
  return (
    <div className="portfolio">
      <>
      <h1>Portfolio</h1>
      <p>
        This is a showcase of some the projects I've accomplished.
      </p>

      <div className="topleft"><img src={window.location.origin + '/logo2.png'} /></div>

      </>
    </div>
  );
}
