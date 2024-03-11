import React from 'react';
import { Link } from 'react-router-dom';

function StatisticsButton() {
  return (
    <div>
      <Link to="/otra-ruta">
        <button>Estadísticas</button>
      </Link>
    </div>
  );
}

export default StatisticsButton;