import React from 'react';
import { Link } from 'react-router-dom';
import './PlayersCSS.css';
import Logo from '../../../Assets/Logo-LB3.png';
import Footer from "../../../Assets/Footer.png";

const PLAYERS_TITLE = 'ESTADÍSTICAS DE JUGADORES'
const TOP_SCORERS = 'Máximos goleadores';
const TOP_ASSISTS = 'Máximos asistidores';
const TOP_YELLLOW_CARDS = 'Más tarjetas amarillas';
const MENU_LINK_TEXT = 'Menú';

const Players = () => {
  return (
    <div className='players-container'>
      <Link to='/navmenu' className='link-navmenu-table'>
          {MENU_LINK_TEXT}
        </Link>
      <div className="container-link-navmenu-table">
        <Link to='/navmenu' className='link-navmenu-table'>
          Menú
        </Link>
      </div>
      <div className='players-header'>
        <img className='logo-players' src={Logo} alt='Logo' />
        <h1 className='players-title'>{PLAYERS_TITLE}</h1>
      </div>
      <div className='payers-links-container'>
        <Link to='/scorers' className='links-players'>
          {TOP_SCORERS}
        </Link>
        <Link to='/assists' className='links-players'>
          {TOP_ASSISTS}
        </Link>
        <Link to='/yellowcards' className='links-players'>
          {TOP_YELLLOW_CARDS}
        </Link>
      </div>
      <img className='img-footer' src={Footer} alt="footer" />
    </div>
  );
};

export default Players;