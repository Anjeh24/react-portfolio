import React from 'react';

import './portfolio.css';


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
      <dt><div >  <a href="https://anjeh24.github.io/QUIZ-APP/"><img src={process.env.PUBLIC_URL + "/logo2.png"} /></a></div>
      <p>Quiz App</p>
      </dt>
      </span>
      <br/>

      <span>
      <dt><div >  <a href="https://anjeh24.github.io/Professional-Portfolio/"><img src={process.env.PUBLIC_URL + "/logo3.jpg"} /></a></div>
      <p>Professional Portfolio</p>
      </dt>
      </span>
      <br/>

      <span>
      
        <div className="center">  
        <dt><a href="https://anjeh24.github.io/Work-Day-Scheduler/"><img src={process.env.PUBLIC_URL + "/logo4.jpg"} /></a>
        <p>Work Day Scheduler</p></dt>
        </div>
      </span>

      <span>
      <dt><div >  <a href="https://drive.google.com/file/d/16x4p7WO-cTGW485EtC2ZdF1y8RW3MvTM/view"><img src={process.env.PUBLIC_URL + "/logo5.jpg"} /></a></div>
      <p>Employee Tracker</p>
      </dt>
      </span>
      <br/>

      <span>
      <dt><div >  <a href="https://anjeh24.github.io/Password-Generator/"><img src={process.env.PUBLIC_URL + "/logo6.png"} /></a></div>
      <p>Professional Portfolio</p>
      </dt>
      </span>
      <br/>

      <span>
      <dt><div >  <a href="https://anjeh24.github.io/Homework/"><img src={process.env.PUBLIC_URL + "/logo7.png"} /></a></div>
      <p>Professional Portfolio</p>
      </dt>
      </span>
      <br/>

      </main>
      </>
    </div>
  );
}
