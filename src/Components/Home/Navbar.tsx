import React from 'react';
import Logo from "../../Assets/Logo-LB3.png";
import Trophy from "../../Assets/Tofeo-Liga.png";
import Footer from "../../Assets/Footer.png";

const Land: React.FC = () => {
  return (
    <nav>
      <div className='lan-logo-container'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='buttton-container'>
        {/* <StatisticsButton></StatisticsButton>  // TODO_:Componente de botón para el futuro */}
        <a href="/navmenu" className='primary-button'>
          Estadísticas
        </a>
      </div>
      <div className='about-container'>
        <img className='img-trophy-1' src={Trophy} alt="trophy" />
        <h1 className='about-title'>Primera Divisón del Fútbol Colombiano</h1>
        <img className='img-trophy-2' src={Trophy} alt="trophy" />
      </div>
      <div className='about-text'>
        <h2>
        La Primera división es conocida como Categoría Primera A, cuyo nombre comercial es Liga BetPlay desde el año 2020. En ella se coronan dos campeones en el año, en dos torneos diferentes (Apertura y Finalización), que clasifican a la fase de grupos de la Copa Libertadores del año siguiente. El mejor equipo de la reclasificación (suma total de puntos en un año) que no haya sido campeón clasifica a una fase previa junto con el campeón de la Copa Colombia. Por su parte, participan en la Copa Sudamericana los cuatro siguientes mejores equipos en la reclasificación que no hayan clasificado a Copa Libertadores. Finalmente, los dos equipos ubicados en la penúltima y última posición de la tabla de promedios son descendidos de manera directa al Torneo de Ascenso o la Categoría Primera B del próximo año.
        </h2>
      </div>
      <div>
        <img className='img-footer' src={Footer} alt="footer" />
      </div>
    </nav>
  );
}

export default Land;