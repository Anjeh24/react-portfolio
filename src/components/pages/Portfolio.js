import React from 'react';

import "./portfolio.css"

export default function Portfolio() {
  return (
    <div className="portfolio">
      <>
      <main>
      <h1>Portfolio</h1>
      <span>
      <p>
        This is a showcase of some the projects I've accomplished.
      </p>
      </span>
      <br/>
      <span>
      <div >  <img src={process.env.PUBLIC_URL + "/logo2.png"} /></div>
      </span>
      </main>
      </>
    </div>
  );
}
