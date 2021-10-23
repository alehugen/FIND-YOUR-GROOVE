import React from "react";
import linkeDin  from '../images/linkedin_icon.png';
import gitHub  from '../images/github_icon2.png';

export default function Footer() {
  return(
    <div className="footer-box">
      <a href="https://www.linkedin.com/in/alehugen/" target="_blank" rel="noreferrer">
      <img src={ linkeDin } alt="icone linkedin" />
      </a>
      <p>Developed by Alessandro Hugen</p>
      <a href="https://github.com/alehugen" target="_blank" rel="noreferrer">
      <img src={ gitHub } alt="icone github" className='gh' />
      </a>
    </div>
  );
}
