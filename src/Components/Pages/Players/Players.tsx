import React from 'react';
import { Link } from 'react-router-dom';
import './PlayersCSS.css';
import Logo from '../../../Assets/Logo-LB3.png';
import Footer from "../../../Assets/Footer.png";
import BurguerMenu from '../../Menu/Burguer_Menu';

const PLAYERS_TITLE = 'ESTADÍSTICAS DE JUGADORES'
const TOP_SCORERS = 'Máximos goleadores';
const TOP_ASSISTS = 'Máximos asistidores';
const TOP_YELLLOW_CARDS = 'Más tarjetas amarillas';

const Players = () => {
  return (
    <div className='players-container'>
      <div className='burguer-menu'>
        <BurguerMenu></BurguerMenu>
      </div>
      <div className='players-info-container'>
        <div className='players-header'>
          <img className='logo-players' src={Logo} alt='Logo' />
          <h1 className='players-title'>{PLAYERS_TITLE}</h1>
        </div>
        <div className='players-links-container'>
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
    </div>
  );
};

export default Players;