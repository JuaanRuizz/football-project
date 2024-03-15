import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu'; // Importa el componente NavMenu

function StatisticsButton() {
  return (
    <BrowserRouter>
      <Link to="/navmenu"> 
        <button>Estadísticas</button>
      </Link>
      <Route path="/navmenu" component={NavMenu} /> 
    </BrowserRouter>
  );
}

export default StatisticsButton;