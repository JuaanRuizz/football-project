import React from 'react';
import Logo from "../../Assets/Logo-LB3.png";
import Trophy from "../../Assets/Tofeo-Liga.png";
import Footer from "../../Assets/Footer.png";
import {ABOUT_TEXT} from "./StringsHome"
import {ABOUT_TITLE} from "./StringsHome"
// import BurguerMenu from '../Menu/Burguer_Menu';



const Land: React.FC = () => {
  return (
    <nav className='nav'>
      <div className='lan-logo-container'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='about-container'>
        <img className='img-trophy-1' src={Trophy} alt="trophy" />
        <h1 className='about-title'> {ABOUT_TITLE} </h1>
        <img className='img-trophy-2' src={Trophy} alt="trophy" />
      </div>
      <div className='about-text'>
        <h2>
          {ABOUT_TEXT}
        </h2>
      </div>
      <div>
        <img className='img-footer' src={Footer} alt="footer" />
      </div>
    </nav>
  );
}

export default Land;