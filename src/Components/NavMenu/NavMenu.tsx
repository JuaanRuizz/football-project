import React from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Table from './Table';
import Home from '../Home/Home';
import Teams from './Teams';
import Players from './Players';
import Logo from '../../Assets/Logo-LB3.png';

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
                    <BrowserRouter>
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
                        <Switch>
                            <Route path='/home'>
                                <Home></Home>
                            </Route>
                            <Route path='/table'>
                                <Table></Table>
                            </Route>
                            <Route path='/teams'>
                                <Teams></Teams>
                            </Route>
                            <Route path='/players'>
                                <Players></Players>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
            
            <div className='column-right'>
                {/* Aquí deberías tener los elementos que pertenecen a la columna derecha */}
            </div>
        </nav>
    );
};

export default NavMenu;