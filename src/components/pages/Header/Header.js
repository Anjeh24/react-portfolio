import React from "react";
import './Header.css';
import  logoUrl from './logo1.jpg';

const Header = () => (
    <div className="header">
        <>
      <p1>Hi, I'm called Anjeh and I'm learning to become a Full-Stack web developer.</p1>
      <div className="topleft"><img src={logoUrl}/></div>
      </>
    </div>
    
  )
  export default Header;