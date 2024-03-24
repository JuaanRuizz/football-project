import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Logo-LB3.png';

const Players = () => {
  return (
    <div>
      <div className='players-header'>
        <img className='logo-players' src={Logo} alt='Logo' />
        <h1 className='players-title'>ESTADÍSTICAS DE JUGADORES</h1>
      </div>
      <div className='payers-links-container'>
        <Link to='/navmenu' className='links-players'>
          Máximos goleadores
        </Link>
        <Link to='/navmenu' className='links-players'>
          Máximps asistidores
        </Link>
        <Link to='/navmenu' className='links-players'>
          Arcos en cero
        </Link>
      </div>
    </div>
  )
}

export default Players
