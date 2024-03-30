import React from 'react';
import { Link } from 'react-router-dom';
import './PlayersCSS.css';
import Logo from '../../../Assets/Logo-LB3.png';
import Footer from "../../../Assets/Footer.png";


const MAXIMOS_GOLEADORES = 'Máximos goleadores';
const MAXIMOS_ASISTIDORES = 'Máximos asistidores';
const ARCOS_EN_CERO = 'Arcos en cero';

const Players = () => {
  return (
    <div className='players-container'>
      <div className="container-link-navmenu-table">
        <Link to='/navmenu' className='link-navmenu-table'>
          Menú
        </Link>
      </div>
      <div className='players-header'>
        <img className='logo-players' src={Logo} alt='Logo' />
        <h1 className='players-title'>ESTADÍSTICAS DE JUGADORES</h1>
      </div>
      <div className='payers-links-container'>
        <Link to='/navmenu' className='links-players'>
          {MAXIMOS_GOLEADORES}
        </Link>
        <Link to='/navmenu' className='links-players'>
          {MAXIMOS_ASISTIDORES}
        </Link>
        <Link to='/navmenu' className='links-players'>
          {ARCOS_EN_CERO}
        </Link>
      </div>
      <img className='img-footer' src={Footer} alt="footer" />
    </div>
  );
};

export default Players;