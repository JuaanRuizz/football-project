import React from 'react';
import Land from '../Home/Navbar';
import BurguerMenu from '../Menu/Burguer_Menu';
import "./HomeCSS.css"

const Home: React.FC = () => {
  return (
    <div className='home-container'>
      <div className='burguer-menu'>
      <BurguerMenu />
      </div>
      <div className='home-page'>
      <Land />
      </div>
    </div>
  );
}

export default Home;
