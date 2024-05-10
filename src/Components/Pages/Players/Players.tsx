import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PlayersCSS.css';
import Logo from '../../../Assets/Logo-LB3.png';
import BurguerMenu from '../../Menu/Burguer_Menu';
import { PLAYERS_INFO } from './Strings_players';


const Players = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
      <div className='players-container'>
        <div className='burguer-menu' onClick={toggleMenu}>
          <BurguerMenu></BurguerMenu>
        </div>
        <div className={`players-info-container ${menuOpen ? 'menu-open' : ''}`}>
          <div className='players-header'>
            <img className='logo-players' src={Logo} alt='Logo' />
            <h1 className='players-title'>{PLAYERS_INFO.TITLE}</h1>
          </div>
          <div className='players-links-container'>
            <Link to='/scorers' className='links-players'>
              {PLAYERS_INFO.TOP_SCORERS}
            </Link>
            <Link to='/assists' className='links-players'>
              {PLAYERS_INFO.TOP_ASSISTS}
            </Link>
            <Link to='/yellowcards' className='links-players'>
              {PLAYERS_INFO.TOP_YELLLOW_CARDS}
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Players;
