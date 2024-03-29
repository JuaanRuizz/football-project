import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo-LB3.png';
import Aguilas from '../../Assets/logo-aguilas.png';
import America from '../../Assets/logo-america.png';
import Cali from '../../Assets/logo-cali.png';
import Junior from '../../Assets/logo-junior.png';
import Medellin from '../../Assets/logo-medellin.png';
import Millonarios from '../../Assets/logo-millonarios.png';
import Nacional from '../../Assets/logo-nacional.png';
import Pasto from '../../Assets/logo-pasto.png';
import Santafe from '../../Assets/logo-santafe.png';
import Tolima from '../../Assets/logo-tolima.png';
import Caldas from '../../Assets/logo-caldas.png';
import Trofeo from '../../Assets/Tofeo-Liga.png';

const NavMenu: React.FC = () => {
    return (
        <nav className='nav-container'>
            <div className='column-left'>
                <div className='menu-logo-container'>
                    <img className='logo-navmenu' src={Logo} alt='Logo' />
                </div>
                <div className='title-navmenu-container'>
                    <h1 className='title-navmenu'>Liga BetPlay Dimayor</h1>
                    <h3 className='find-text'>Encuentra...</h3>
                </div>
                <div className='menu-container'>
                    <div className='links-container'>
                        <Link to='/home' className='link-home'>
                            Home
                        </Link>
                        <Link to='/table' className='link-table'>
                            Tabla de Posiciones
                        </Link>
                        <Link to='/teams' className='link-teams'>
                            Equipos
                        </Link>
                        <Link to='/players' className='link-players'>
                            Jugadores
                        </Link>
                    </div>
                </div>
                <div className='footer-general'>
                    <h5>Liga BetPlay Dimayor</h5>
                </div>
            </div>

            <div className='column-right'>
                <div className='img-container'>
                    <img src={Aguilas} alt='aguilas' />
                    <img src={America} alt='america' />
                    <img src={Cali} alt='cali' className='cali-img' />
                    <img src={Junior} alt='junior' />
                    <img src={Trofeo} alt='trofeo' className='trofeo-img' />
                    <img src={Millonarios} alt='millonarios' />
                    <img src={Nacional} alt='nacional' className='nacional-img' />
                    <img src={Pasto} alt='pasto' className='pasto-img' />
                    <img src={Santafe} alt='santafe' className='santafe-img' />
                    <img src={Tolima} alt='tolima' className='tolima-img' />
                    <img src={Medellin} alt='medellin' className='medellin-img' />
                    <img src={Caldas} alt='caldas' className='caldas-img' />
                    {/* <img src={Balon} alt="balon-1" />
                    <img src={Balon} alt="balon-2" /> */}
                </div>
            </div>
        </nav>
    );
};

export default NavMenu;
